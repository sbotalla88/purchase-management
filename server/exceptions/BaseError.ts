import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { ExtendableError } from 'ts-error';

import { IJsonResponseError } from '../types';
import customMessages from './customMessages';

const getMessage = (code: number) => {
    try {
        const message = customMessages[code];
        if (!message) {
            return getReasonPhrase(code);
        }
    } catch (error) {
        return 'Unknown error code';
    }
};

export default class BaseError extends ExtendableError {
    code: number;
    constructor(code: number = StatusCodes.INTERNAL_SERVER_ERROR, m?: string, name?: string) {
        const message = m ? m : getMessage(code);
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BaseError.prototype);
        this.code = code;
        this.name = name ? name : 'SERVER_ERROR';
    }

    getCode(): number {
        return this.code;
    }

    toJSON(): IJsonResponseError {
        return {
            status: this.code,
            message: this.message,
            name: this.name,
        };
    }
}
