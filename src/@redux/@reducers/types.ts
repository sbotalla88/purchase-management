import { AxiosInstance } from 'axios';
import { Dispatch } from 'redux';

export type ActionOptions = {
    axios: AxiosInstance;
    dispatch: Dispatch;
};

export type SelectType<D> = D & {
    value?: string | number;
    label?: string;
};
