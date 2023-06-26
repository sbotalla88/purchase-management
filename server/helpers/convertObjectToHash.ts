import hash from 'object-hash';

/**
 * Convert Object to Hash
 *
 * @param obj
 * @returns
 */
export const convertObjectToHash = (obj: any) => {
    return hash(obj);
};
