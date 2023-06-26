import { Request, Response, NextFunction } from 'express';

import { ValidateError } from 'tsoa';
import isEmpty from 'lodash/isEmpty';

import StatusCodes from './statusCodes';
import HttpError from './HttpError';
import MultipleHttpError from './MultipleHttpError';
import HttpAuthError from './HttpAuthError';
import { WinstonLogger } from '../helpers';
import { APP_DEBUG } from '../helpers/secrets';

// TODO: create reusable function to send error & winston console if its not insteance of HttpError
//eslint-disable-next-line
// const dontReports: Array<any> = [ValidateError, HttpError, MultipleHttpError, HttpAuthError];

export const errorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any | void> => {
    if (res.headersSent) {
        return next(err);
    } else if (err instanceof ValidateError) {
        // console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        const message = `URL: ${req.baseUrl}, Method: ${req.method}, Body param: ${
            !isEmpty(req.body) ? JSON.stringify(req.body) : ''
        }, Query param: ${!isEmpty(req.query) ? JSON.stringify(req.query) : ''}, Remote address: ${
            req.socket.remoteAddress
        }, Error Fields: ${JSON.stringify(err.fields)}, StatusCode: 422`;
        WinstonLogger.error(message);
        return res.status(422).json({
            status: 422,
            message: 'Validation Failed',
            details: err?.fields,
            name: 'VALIDATION_ERROR',
        });
    } else if (err instanceof HttpError || err instanceof HttpAuthError) {
        // console.warn(`Caught Error for ${req.path}:`, err.message);
        const message = `URL: ${req.baseUrl}, Method: ${req.method}, Body param: ${
            !isEmpty(req.body) ? JSON.stringify(req.body) : ''
        }, Query param: ${!isEmpty(req.query) ? JSON.stringify(req.query) : ''}, Remote address: ${
            req.socket.remoteAddress
        }, Error: ${err.message}, StatusCode: ${err.getCode()}`;
        WinstonLogger.error(message);
        return res.status(err.getCode()).send(err.toJSON());
    } else if (err instanceof MultipleHttpError) {
        // console.warn(`Caught Multiple Error for ${req.path}:`, err.message);
        res.status(err.getCode());
        return res.send({
            errors: err.getErrors().map((e) => ({
                status: e.getCode(),
                code: e.name,
                message: e.message,
                trace: APP_DEBUG && res.statusCode != StatusCodes.NOT_FOUND ? e.stack : undefined,
            })),
        });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        errors: {
            status: res.statusCode,
            name: err.name,
            message: err.message,
            trace: APP_DEBUG && res.statusCode != StatusCodes.NOT_FOUND ? err.stack : undefined,
        },
    });
};

export const notFoundHandler = (): void => {
    throw new HttpError(StatusCodes.NOT_FOUND);
};
