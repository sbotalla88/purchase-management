import { Controller, Get, Request, Route, SuccessResponse, Example, Response, Tags } from 'tsoa';
import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';

import type { IPublicHealthResponse, IPublicHomeResponse, ExRequest } from '../types';

@Tags('Public')
@Route('public')
export class PublicController extends Controller {
    /**
     * Returns API Info
     *
     */
    @Example<IPublicHomeResponse>({
        msg: 'Purchase management API',
        version: '0.0.1',
    })
    @Get('')
    @SuccessResponse(HttpStatus.OK, 'Returns API Version')
    public async getHome(): Promise<IPublicHomeResponse> {
        return {
            msg: 'Purchase managemen API',
            version: process.env.npm_package_version || '0.0.1',
        };
    }

    /**
     * Check if API is available
     *
     */
    @Example<IPublicHealthResponse>({
        status: 'OK',
        dbStatus: 'connected',
    })
    @Get('health')
    @SuccessResponse(HttpStatus.OK, 'Returns DB Connection Status')
    @Response<IPublicHealthResponse>(503, 'Returns Unavailable', {
        status: 'Unavailable',
        dbStatus: 'disconnected',
    })
    public async getHealth(): Promise<IPublicHealthResponse> {
        const somethingWrong = mongoose.connection.readyState != 1;
        if (somethingWrong) {
            this.setStatus(HttpStatus.SERVICE_UNAVAILABLE);
            return {
                status: 'Unavailable',
                dbStatus: mongoose.STATES[mongoose.connection.readyState],
            };
        } else {
            this.setStatus(HttpStatus.OK);
            return {
                status: 'OK',
                dbStatus: mongoose.STATES[mongoose.connection.readyState],
            };
        }
    }

    /**
     * Ping to API
     *
     */
    @Get('ping')
    public async getPing(@Request() request: ExRequest): Promise<void> {
        request?.res?.status(HttpStatus.OK).send('PONG');
    }
}
