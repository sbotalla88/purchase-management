import snackDefaultOptions from './snackDefaultOptions';

export const snackAdd = (snack: ISnack.Payload) => ({
    type: '@snack/ADD',
    payload: {
        ...snackDefaultOptions,
        ...snack,
    },
});

export const snackDelete = (id: ISnack.Payload['id']) => ({
    type: '@snack/DELETE',
    payload: id,
});
