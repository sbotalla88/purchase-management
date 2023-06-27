import { Types } from 'mongoose';
export * from './date';
export * from './secrets';
export * from './registerModels';
export * from './winston';
export * from './csv';

export const getObjectId = (id: string): Types.ObjectId => {
    const contactId =
        // @ts-ignore
        id && !Types.ObjectId.isValid(id)
            ? Number(id.match(/^\d+$/) ? id : 0)
                  .toString(16)
                  .padStart(24, '0')
            : id;
    return new Types.ObjectId(contactId);
};
