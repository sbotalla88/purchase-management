import { Request, Response, NextFunction } from 'express';
import { expressAuthentication } from './authentication';

export const customRouteAuth =
    (authType: 'basic' | 'webhook' | 'admin') => async (req: Request, res: Response, next: NextFunction) => {
        const token = req.query.token;

        if (!req.headers.authorization && token) {
            req['headers']['authorization'] = `Bearer ${token}`;
        }

        await expressAuthentication(req, authType);
        return next();
    };
