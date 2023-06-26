import fs from 'fs';
import { checkWildCardPattern } from './checkWildCardPattern';

/**
 * Read All files in a directory
 *
 * @param path
 * @returns
 */
export const readAllFiles = (path: string, pattern = '*'): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function (err, filenames) {
            if (err) {
                reject(err);
            }
            resolve(filenames.filter((e) => checkWildCardPattern(e, pattern) && !e.includes('.map')));
        });
    });
};
