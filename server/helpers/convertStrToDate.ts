import moment from 'moment-timezone';

export const tzMap = [
    { name: 'GMT', value: 0 },
    { name: 'CET', value: 1 },
    { name: 'EET', value: 2 },
    { name: 'EAT', value: 3 },
    { name: 'IRST', value: 3.5 },
    { name: 'GET', value: 4 },
    { name: 'PKT', value: 5 },
    { name: 'IST', value: 5.5 },
    { name: 'BST', value: 6 },
    { name: 'THA', value: 7 },
    { name: 'WST', value: 8 },
    { name: 'JST', value: 9 },
    { name: 'ACST', value: 9.5 },
    { name: 'AET', value: 10 },
    { name: 'NCT', value: 11 },
    { name: 'NZST', value: 12 },
    { name: 'SST', value: -11 },
    { name: 'HST', value: -10 },
    { name: 'AKST', value: -9 },
    { name: 'PST', value: -8 },
    { name: 'MST', value: -7 },
    { name: 'CST', value: -6 },
    { name: 'EST', value: -5 },
    { name: 'AST', value: -4 },
    { name: 'ART', value: -3 },
    { name: 'GST', value: -2 },
    { name: 'EGT', value: -1 },
];

export const tzDSTMap = [
    { name: 'GMT', value: 0 },
    { name: 'CET', value: 1 },
    { name: 'EET', value: 2 },
    { name: 'EAT', value: 3 },
    { name: 'IRST', value: 3.5 },
    { name: 'GET', value: 4 },
    { name: 'PKT', value: 5 },
    { name: 'IST', value: 5.5 },
    { name: 'BST', value: 6 },
    { name: 'THA', value: 7 },
    { name: 'WST', value: 8 },
    { name: 'JST', value: 9 },
    { name: 'ACST', value: 9.5 },
    { name: 'AET', value: 10 },
    { name: 'NCT', value: 11 },
    { name: 'NZST', value: 12 },
    { name: 'NUT', value: -11 },
    { name: 'SDT', value: -10 },
    { name: 'HDT', value: -9 },
    { name: 'AKDT', value: -8 },
    { name: 'PDT', value: -7 },
    { name: 'MDT', value: -6 },
    { name: 'CDT', value: -5 },
    { name: 'EDT', value: -4 },
    { name: 'ART', value: -3 },
    { name: 'GST', value: -2 },
    { name: 'EGT', value: -1 },
];

/**
 * Convert Server Time String to local date string
 *
 * @param str
 * @param tzOffset
 * @returns
 */
export const convertStrToLocalDate = (str: string | Date = '', tzOffset?: number | string, isDate?: boolean) => {
    if (!str) {
        return '';
    }
    if (tzOffset === undefined || tzOffset === null || tzOffset === '') {
        return moment(str).format('MMM DD, YYYY HH:mm zz');
    } else {
        const clientTimeStamp = moment.utc(str).unix() - parseInt(tzOffset as string) * 60;
        const now = moment.unix(clientTimeStamp).utc();

        const tzValue = parseInt(tzOffset as string) / -60;

        const timeZone = (
            moment.tz(moment.utc(str, false).format('YYYY-MM-DD HH:mm'), 'America/Los_Angeles').isDST()
                ? tzDSTMap
                : tzMap
        ).find((e) => e.value === tzValue);
        const dateFormat = isDate ? 'MMM DD, YYYY' : 'MMM DD, YYYY HH:mm';

        return (
            now.format(dateFormat) +
            ' ' +
            (timeZone !== undefined ? timeZone.name : `GMT ${parseInt(tzOffset as string) / -60}`)
        );
    }
};
