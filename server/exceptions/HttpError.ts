import BaseError from './BaseError';

export default class HttpError extends BaseError {
    constructor(code: number, m?: string, name = 'HTTP_ERROR') {
        super(code, m, name);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
