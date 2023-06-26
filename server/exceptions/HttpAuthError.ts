import HttpError from './HttpError';
import { StatusCodes } from './statusCodes';

export default class HttpAuthError extends HttpError {
    constructor(code: number = StatusCodes.UNAUTHORIZED, m?: string) {
        super(code, m, 'AUTH_ERROR');
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpAuthError.prototype);
    }
}
