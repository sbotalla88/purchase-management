import next from 'next';
import mongoose from 'mongoose';
import { Request, Response } from 'express';

import { connectMongo } from './helpers/database';
import { MONGODB_URI } from './helpers';
import server from './server';

const dev = process.env.NODE_ENV === 'development';

console.log('dev:', dev);
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    try {
        //Connect mongoDB
        await connectMongo(mongoose, MONGODB_URI);

        //Next app ready
        await app.prepare();
        //Configure Nextjs page urls
        server.all('*', (req: Request, res: Response) => {
            return handle(req, res);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    /**
     * Start Express server.
     */
    const serverInstance = server.listen(server.get('port'), () => {
        console.log('> Server is running at http://localhost:%d in %s mode', server.get('port'), server.get('env'));
        console.log('> Press CTRL+C to stop or npm stop for pm2\n ');
    });
    serverInstance.keepAliveTimeout = 121 * 1000;
    serverInstance.headersTimeout = 125 * 1000;
})();
