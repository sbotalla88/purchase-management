import { toast } from 'react-toastify';

import initialState from './initialState';
import snackDefaultOptions from './snackDefaultOptions';

const newSnack = (data: ISnack.Payload): ISnack.Payload => {
    const snack = {
        ...snackDefaultOptions,
        ...data,
    };
    const toastId = toast[snack?.severity ?? 'info'](snack?.content ?? '', {
        position: 'bottom-right',
        autoClose: snack?.life ?? 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: snack.id,
    });
    return {
        ...snack,
        id: toastId,
    };
};
// eslint-disable-next-line
export default (state: ISnack.Payload[] = initialState, action: any): ISnack.Payload[] => {
    if (action.type.endsWith('_ERROR')) {
        if (
            (action?.payload?.status === 401 || action.payload?.response?.status === 401) &&
            action.type !== '@auth/SIGN_IN_ERROR'
        ) {
            newSnack({
                id: 'unauthorized',
                severity: 'error',
                content: 'You are not logged in or your session expired. Please login again.',
            });
            return state;
        }

        if (action.payload.status === 403) {
            newSnack({
                id: 'nopermission',
                severity: 'error',
                content: action.payload.message || action.payload.error || 'You have no access permission in this app.',
            });
            return state;
        }

        if (action?.payload?.status === 429 || action.payload?.response?.status === 429) {
            newSnack({
                id: 'ratelimit',
                severity: 'error',
                content: action.payload.message || 'You Reached Rate Limit. Try again after a while.',
            });
            return state;
        }

        if (action.meta && action.meta.snack_error) {
            newSnack({
                ...action.meta.snack_error,
                severity: 'error',
                id: action.type,
            });
            return state;
        } else if (action.payload.message) {
            newSnack({
                content: action.payload.message,
                severity: 'error',
                id: action.type,
            });
            return state;
        }
    }

    if (action.meta && action.type.endsWith('_SUCCESS')) {
        if (action.meta.snack_success) {
            let snackData = {
                ...action.meta.snack_success,
                severity: 'success',
            };
            if (action.payload && action.payload.snack) {
                snackData = {
                    severity: 'success',
                    ...action.payload.snack,
                };
            }
            newSnack(snackData);
            return state;
        }
    }

    switch (action.type) {
        case '@snack/ADD': {
            newSnack(action.payload);
            return state;
        }
        default:
            return state;
    }
};
