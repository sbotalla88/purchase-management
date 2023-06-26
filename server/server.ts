import express, { Request, Response } from 'express';
//@ts-ignore
import Session from 'express-session';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
//@ts-ignore
import MongoStore from 'connect-mongo';
//@ts-ignore
import cookieParser from 'cookie-parser';

import { MONGODB_URI, SESSION_SECRET } from './helpers';
import { RegisterRoutes } from './routes';
import { errorHandler } from './exceptions';
import { registerModels } from './helpers';

import { Logger } from './middlewares/logger';

// Create Express server
const server = express();

// Register Middlewares
server.use(cors());
server.use(express.json({ limit: '100mb' }));
server.use(express.static('upload'));
server.use(express.urlencoded({ extended: false, limit: '100mb' }));
server.set('port', process.env.PORT || 3000);
// Express configuration
server.use(compression());
server.use(cookieParser());

/* Swagger files start */
server.use('/api/guide', swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(swaggerUi.generateHTML(await import('./swagger.json')));
});
/* Swagger files end */

// Register Public Path
server.use('/api/public/static', express.static(path.join(__dirname, '../public/static')));
// Register DB Models
registerModels();

server.use(/^(?!\/*api\/(?:guide|public|admin))\/*api\/[a-zA-Z0-9!@#\\$%\\^\\&*\\)\\(+=./_-]+/, Logger);

// Register router
RegisterRoutes(server);

server.use(errorHandler);

export default server;
