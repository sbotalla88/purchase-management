import { StatusCodes } from './statusCodes';

export const INVALID_URL = 'Invalid URL';
export const INVALID_AUTH_HEADER = 'Invalid authorization header';
export const CONFLICT_USER = 'User exists already';

export const USER_REGISTER_ERROR = 'Could not register user';

export const CustomMessages = {
    [StatusCodes.INVALID_AUTH_HEADER]: INVALID_AUTH_HEADER,
    [StatusCodes.NOT_FOUND]: 'Invalid URL',
};

export default CustomMessages;
