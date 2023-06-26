import { StatusCodes as DefaultStatusCodes } from 'http-status-codes';

export const StatusCodes = {
    ...DefaultStatusCodes,
    INVALID_AUTH_HEADER: 435,
};

export default StatusCodes;
