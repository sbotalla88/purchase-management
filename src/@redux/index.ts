import reducer from './rootReducer';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import { initialState } from './initialState';

export const rootReducer = reducer;

export type AppState = typeof initialState;

// export { default as createStore } from './createStore';

export const useRedux = <K extends keyof AppState>(key: K) => useSelector((state: AppState) => state[key]);

export const useReduxLoading = <K extends keyof AppState>(...keys: K[]) =>
    useSelector((state: AppState) =>
        keys.some((key) => get(state, `${key}.isLoading`, false) || get(state, `${key}.isInitLoading`, false))
    );
