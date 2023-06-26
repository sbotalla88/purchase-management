import HttpStatus from 'http-status-codes';
import HttpError from './HttpError';

export default class HttpContactNotAccessibleError<T> extends HttpError {
    owner: T;
    constructor(owner: T, m?: string) {
        super(HttpStatus.FORBIDDEN, m, 'CONTACT_INACCESSIBLE_ERROR');
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpContactNotAccessibleError.prototype);
        this.owner = owner;
    }

    getOwner() {
        return this.owner;
    }
}
