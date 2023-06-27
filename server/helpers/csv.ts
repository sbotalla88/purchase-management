import _ from 'lodash';
import { parse } from 'csv-parse/sync';
import { CSV_COLUMN_OBJECT } from './constant';
export const parseCSV = async (data: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const records = parse(data, {
            columns: Object.keys(CSV_COLUMN_OBJECT),
            skip_empty_lines: true,
        });

        //Remove column label if exists
        if (_.isEqual(records[0], CSV_COLUMN_OBJECT)) {
            records.shift();
        }
        resolve(records);
    });
};
