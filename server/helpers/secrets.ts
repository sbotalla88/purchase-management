// Dotenv need to be loaded first before everything
import dotenv from 'dotenv-flow';
import path from 'path';

dotenv.config();

const MONGODB_URI_SCHEME = process.env?.['MONGODB_URI_SCHEME'] ?? 'mongodb';

const MONGODB_USER = process.env?.['MONGODB_USER'];

const MONGODB_PASSWORD = process.env?.['MONGODB_PASSWORD'];

const MONGODB_HOST = process.env?.['MONGODB_HOST'] ?? 'localhost';

const MONGODB_PORT = process.env?.['MONGODB_PORT'] ?? 27017;

const MONGODB_DATABASE = process.env?.['MONGODB_DATABASE'] ?? 'clearsite';

export const ENVIRONMENT = process.env?.['NODE_ENV'];

export const SESSION_SECRET = process.env?.['SESSION_SECRET'] ?? '';

export const MONGODB_URI = `${MONGODB_URI_SCHEME}://${
    MONGODB_USER ? MONGODB_USER + ':' + MONGODB_PASSWORD + '@' : ''
}${MONGODB_HOST}${
    MONGODB_URI_SCHEME === 'mongodb+srv' ? '' : ':' + MONGODB_PORT
}/${MONGODB_DATABASE}?retryWrites=true&w=majority&authSource=admin`;

export const MONGODB_POOL_SIZE = +(process.env?.['MONGODB_POOL_SIZE'] ?? 5);

export const APP_DEBUG = true;

export const LOG_PATH = path.resolve(process.env?.LOG_PATH ?? './.persist/logs');
