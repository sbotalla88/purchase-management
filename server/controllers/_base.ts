import { Controller } from 'tsoa';

import { BaseService } from '../services/_base';
import { HttpAuthError, HttpError, StatusCodes } from '../exceptions';
import { ExRequest, IJsonResponseSuccess } from '../types';

export class BaseController<T extends BaseService> extends Controller {
    service: T;

    constructor(private readonly Service: new () => T) {
        super();
        this.service = new this.Service();
    }

    /**
     * Error Response
     *
     * @param param0
     */
    errorResponse = ({ code = StatusCodes.INTERNAL_SERVER_ERROR, message }: { code?: number; message?: string }) => {
        throw new HttpError(code, message);
    };

    /**
     * Auth Error Response
     *
     * @param param0
     */
    authErrorResponse = ({
        code = StatusCodes.UNAUTHORIZED,
        message = '',
    }: { code?: number; message?: string } = {}) => {
        throw new HttpAuthError(code, message);
    };

    /**
     * Success Response
     *
     * @param param0
     * @returns
     */
    successResponse = <T = any>({
        code = StatusCodes.OK,
        message,
        data,
    }: {
        code?: number;
        message?: string;
        data?: T;
    } = {}): IJsonResponseSuccess<T> => {
        return {
            ...new HttpError(code, message, 'SUCCESS_RESPONSE').toJSON(),
            ...(data ? { data } : {}),
        };
    };
}
