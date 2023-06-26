import { Container } from 'typedi';
import { purchaseOrder } from '../libData/purchaseOrder';

const Models = {
    'model.purchaseOrder': purchaseOrder,
};

export const registerModels = () => {
    Object.keys(Models).forEach((key) => {
        Container.set<any>(key, Models[key as keyof typeof Models]);
    });
};
