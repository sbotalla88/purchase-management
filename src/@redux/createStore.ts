import { applyMiddleware, createStore } from 'redux';
import { createPromise as createPromiseMiddleware } from 'redux-promise-middleware';
//@ts-ignore
import createThunkerMiddleware from 'redux-thunker';
import { composeWithDevTools } from '@redux-devtools/extension';

import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

import { initialState } from './initialState';
import createAppReducer from './rootReducer';

import axios from './@thunker/axios';
import { storage } from './localforage';

const persistConfig: PersistConfig<typeof initialState> = {
    key: 'root',
    storage: storage,
    debug: false,
};

// eslint-disable-next-line
export default (preloadedState = initialState, history: any) => {
    const isDev = process.env.NODE_ENV !== 'production';
    const isServer = process.env.BUILD_TARGET === 'server';

    const promiseMiddleware = createPromiseMiddleware({
        promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    });

    const thunkerMiddleware = createThunkerMiddleware({
        config: {
            reduxThunkCompatible: false,
            continuous: true,
        },
        extraArgumentsEnhanced: {
            axios,
        },
        extraArguments: {
            history,
        },
    });

    const middleware = [thunkerMiddleware, promiseMiddleware];

    if (isDev && !isServer) {
        /* eslint-disable-next-line */
        const createLogger = require('redux-logger').createLogger;
        const logger = createLogger({
            collapsed: true,
            // eslint-disable-next-line
            predicate: (getState: any, action: any) =>
                action.type !== 'persist/PERSIST' && action.type !== 'persist/REHYDRATE',
        });
        middleware.push(logger);
    }

    const appReducer = createAppReducer(preloadedState);

    // @ts-ignore
    const persistedReducer = persistReducer(persistConfig, appReducer);

    const store = createStore(
        // eslint-disable-next-line
        (typeof window !== 'undefined' ? persistedReducer : appReducer) as any,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    const persistor = persistStore(store);

    return { store, persistor };
};
