import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

import { IPurchaseOrder, IOrderInfo } from '../types';

const OrderSchema = new Schema<IOrderInfo>(
    {
        modelNumber: {type: Schema.Types.String},
        unitPrice: {type: Schema.Types.Number},
        quantity: {type: Schema.Types.Number},
    }
)

const PurchaseOrderSchema = new Schema<IPurchaseOrder>(
    {
        _id: { type: Schema.Types.ObjectId, auto: true, alias: 'id' },
        vendor: { type: Schema.Types.String },
        orders: {type: [OrderSchema]},
        date: {type: Schema.Types.Date},
        createdAt: { type: Date, default: new Date(), index: true },
        updatedAt: { type: Date, default: new Date(), index: true },
    },
    { timestamps: true }
);

PurchaseOrderSchema.index({
    vendor: 1,
});
PurchaseOrderSchema.index({
    date: 1,
});
PurchaseOrderSchema.index({
    orders: 1,
});

PurchaseOrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (_: any, ret: any) {
        delete ret._id;
    },
});

PurchaseOrderSchema.plugin(mongoosePaginate);
PurchaseOrderSchema.plugin(aggregatePaginate);

export const purchaseOrderSchema = PurchaseOrderSchema;
export const purchaseOrder = model<IPurchaseOrder>('PurchaseOrder', PurchaseOrderSchema);
