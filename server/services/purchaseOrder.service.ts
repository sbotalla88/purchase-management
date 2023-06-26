/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';

import { IPurchaseOrder, IPurchaseOrderParams, IPaginationRes } from '../types';
import { BaseService } from './_base';

export class PurchaseOrderService extends BaseService<IPurchaseOrder> {
    constructor() {
        super('purchaseOrder');
    }

    /**
     * Search Purchase Order
     *
     * @param searchQuery
     * @param page
     * @param limit
     * @returns
     */
    fetchPurchaseOrders = async (
        searchQuery?: IPurchaseOrderParams,
        page = 1,
        limit = 50
    ): Promise<IPaginationRes<IPurchaseOrder>> => {
        const findQuery = { ...searchQuery };

        const result = await this._model //@ts-ignore
            .paginate(
                { ...findQuery },
                {
                    allowDiskUse: true,
                    page: page,
                    limit: limit,
                }
            );
        return result;
    };

    /**
     * Add new location event
     *
     * @param data
     * @returns
     */
    addPurchaseOrder = async (data: IPurchaseOrderParams) => {
        try {
            const existingData = await this._model.findOne({
                vendor: data.vendor,
            });
            if (existingData) {
                await this._model.updateOne({ _id: existingData._id }, { ...data, updatedAt: new Date() });
                return existingData._id;
            } else {
                const newData = {
                    ...data,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                const purchaseOrder = new this._model(newData);
                const result = await purchaseOrder.save();

                return result._id.toString();
            }
        } catch (error) {
            console.log(error);
            return '0';
        }
    };

    removePurchaseOrders = async (where = {}): Promise<void> => {
        await this._model.deleteMany(where);
        return;
    };
}
