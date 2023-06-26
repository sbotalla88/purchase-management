import { Request, Response, NextFunction } from 'express';
import isEmpty from 'lodash/isEmpty';

import { WinstonLogger } from '../helpers';

export const Logger = (req: Request, res: Response, next: NextFunction) => {
    // console.log('api call');
    const message = `URL: ${req.baseUrl}, Method: ${req.method}, Body param: ${
        !isEmpty(req.body) ? JSON.stringify(req.body) : ''
    }, Query param: ${!isEmpty(req.query) ? JSON.stringify(req.query) : ''}, Remote address: ${
        req.socket.remoteAddress
    } StatusCode: ${res.statusCode}`;
    if (res.statusCode == 200) {
        // console.log('http');
        WinstonLogger.info(message);
    } else if (res.statusCode >= 400 && res.statusCode < 500) {
        // console.log('warn');
        WinstonLogger.warn(message);
    } else if (res.statusCode >= 500) {
        // console.log('error');
        WinstonLogger.error(message);
    } else {
        // console.log('info');
        WinstonLogger.info(message);
    }
    next();
};
