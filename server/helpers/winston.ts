import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { LOG_PATH } from './secrets';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
    })
);

const transports = [
    new winston.transports.Console(),
    new DailyRotateFile({
        filename: `${LOG_PATH}/error_%DATE%.log`,
        datePattern: 'YYYY_MM_DD',
        level: 'error',
    }),
    new DailyRotateFile({
        filename: `${LOG_PATH}/all_%DATE%.log`,
        datePattern: 'YYYY_MM_DD',
        level: 'info',
    }),
];

export const WinstonLogger = winston.createLogger({
    format,
    transports,
});
