import { BaseModel, IPaginationQueryParams, ISortQueryParams } from './general';

export interface IOrderInfo {
    modelNumber: string;
    unitPrice: number;
    quantity: number;
}
export interface IPurchaseOrderParams {
    /**
     * Verdor's name
     */
    vendor: string;
    date: string | Date;
    orders: IOrderInfo[];
}

export interface IPurchaseOrder extends BaseModel, IPurchaseOrderParams {}
