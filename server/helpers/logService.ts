import * as fs from 'fs';
import path from 'path';
import moment from 'moment';
import { LOG_PATH } from './secrets';

export class LogService {
    private startTime: [number, number];

    /**
     * Create Log Service Instance
     *
     * @param name File Name to log
     */
    constructor(private name: string) {
        this.startTime = process.hrtime();
    }

    /**
     * Start Timer
     *
     */
    start() {
        this.startTime = process.hrtime();
    }

    /**
     * Log Message
     *
     * @param message
     */
    log(message = '') {
        const logText = `${new Date().toString()} - ${message} - Elapsed: ${process.hrtime(this.startTime)[0]}\n`;
        fs.writeFileSync(path.join(LOG_PATH, `/${this.name}_${moment().format('YYYY-MM-DD')}.log`), logText, {
            flag: 'a+',
        });
    }

    /**
     * Log Success Message
     *
     * @param message
     */
    success(message = '') {
        this.log(`SUCCESS - ${message}`);
    }

    /**
     * Log Info Message
     *
     * @param message
     */
    info(message = '') {
        this.log(`INFO - ${message}`);
    }

    /**
     * Log Error Message
     *
     * @param message
     */
    error(message = '') {
        this.log(`ERROR - ${message}`);
    }
}
