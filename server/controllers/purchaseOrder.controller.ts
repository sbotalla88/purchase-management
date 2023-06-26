import { Route, Security, Get, SuccessResponse, Tags, Request, Example, Path, Query, Post, Body, UploadedFile, FormField } from 'tsoa';
import HttpStatus from 'http-status-codes';
import { PurchaseOrderService } from '../services';
import { BaseController } from './_base';
import { parseCSV, validateDate} from '../helpers'
import type { ExRequest, IJsonResponseSuccess, IPaginationRes, IPurchaseOrderParams } from '../types';

/**
 * Admin PurcahseOrder controller
 */
@Tags('Admin PurchaseOrder')
@Route('admin/purchaseOrder')
@Security('admin')
export class AdminPurchaseOrderController extends BaseController<PurchaseOrderService> {
    constructor() {
        super(PurchaseOrderService);
    }

    /**
     * Get purchase orders
     */
    @Example<IJsonResponseSuccess<IPaginationRes<IPurchaseOrderParams>>>({
        status: 200,
        message: 'OK',
        name: 'SUCCESS_RESPONSE',
        data: {
            docs: [
                {
                    vendor: 'John Doe',
                    orders: [{
                        modelNumber: 'model-1',
                        unitPrice: 15.0,
                        quantity: 10
                    }],
                    date: '2023-06-26T13:12:39.680+00:00'
                },
            ],
            hasNextPage: false,
            hasPrevPage: true,
            limit: 10,
            nextPage: 2,
            page: 1,
            pagingCounter: 31,
            prevPage: 3,
            totalDocs: 37,
            totalPages: 4,
            offset: 6,
        },
    })
    @Get('search')
    @SuccessResponse(HttpStatus.OK, 'Returns purchase orders')
    async getPurchaseOrders(
        @Request() req: ExRequest,
        @Query('vendor') vendor?: string,
        @Query('date') date?: string|Date,
        @Query('page') page = 1,
        @Query('limit') limit = 10,
        @Query('pagination') pagination = true
    ): Promise<IJsonResponseSuccess<IPaginationRes<IPurchaseOrderParams>>> {
        const query: any = {
            ...(vendor?{vendor}:{}),
            ...(date?{date}:{})
        };

        const response = await this.service.fetchPurchaseOrders(query, page ?? 1, limit ?? 10);

        return this.successResponse({
            data: response,
        });
    }

    /**
     * Add new purchase order
     */
    @Post('new')
    @SuccessResponse(HttpStatus.OK, 'Returns added purchase order')
    @Security('admin')
    async addPurchaseOrder(
        @Request() req: ExRequest,
        @FormField() vendor: string,
        @FormField() date: string,
        @UploadedFile() csv: Express.Multer.File
    ): Promise<IJsonResponseSuccess<any>> {
        try {
            const isValidDate = validateDate(date);
            if(!isValidDate){
                return this.errorResponse({code:HttpStatus.BAD_REQUEST, message: 'Invalid date format'})
            }
            const csvData = await parseCSV(csv.buffer.toString('utf8'));
            
            let invalidCSVCountObj = {
                modelNumber: 0,
                unitPrice:0,
                quantity:0
            };
            const validCSVData = csvData.filter((element:any)=>{
                if(typeof element.modelNumber !== 'string' ){
                    invalidCSVCountObj.modelNumber++;
                    return false;
                } else if( Number.isNaN(parseFloat(element.unitPrice))){
                    invalidCSVCountObj.unitPrice++;
                    return false;
                } else if(Number(element.quantity) !== parseInt(element.quantity) || Number.isNaN(parseInt(element.quantity))){
                    invalidCSVCountObj.quantity++;
                    return false;
                } else {
                    return true;
                }
            });
            if(validCSVData.length === 0){
                return this.errorResponse({code:HttpStatus.BAD_REQUEST, message: 'Invalid CSV data'})
            }
            const message = `${invalidCSVCountObj.modelNumber?invalidCSVCountObj.modelNumber+' invalid model number out of '+ csvData.length+", ": ''}${invalidCSVCountObj.unitPrice?invalidCSVCountObj.unitPrice+' invalid unit price value out of '+ csvData.length+", ": ''}${invalidCSVCountObj.quantity?invalidCSVCountObj.quantity+' invalid quantity value out of '+ csvData.length+", ": ''}`;
            const data = {
                vendor,
                orders: validCSVData,
                date
            };
            const response = await this.service.addPurchaseOrder({ ...data });
            return this.successResponse({
                data: response,
                message
            });
        } catch (error:any) {
            return this.errorResponse({message: error.message})
        }
    }
}
