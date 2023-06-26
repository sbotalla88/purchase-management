import { ExRequest } from '../types';
import { HttpAuthError } from '../exceptions';

export async function expressAuthentication(request: ExRequest, securityName: string, _scopes?: string[]) {
    //TODO: Add authentication here
    return Promise.resolve(request);
    throw new HttpAuthError();
}
