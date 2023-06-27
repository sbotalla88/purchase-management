import { combineReducers } from 'redux';

import { initialState } from './initialState';

import snacks from './snacks';
import purchaseOrder from './purchaseOrder';
import { storage } from './localforage';

const { ...emptyInitState } = initialState;

const ExcludeActionTypes = ['@auth/SIGN_IN'];

// eslint-disable-next-line
const createAppReducer = (initialState: any) => {
    const appReducer = combineReducers({
        snacks,
        purchaseOrder,
    });

    // eslint-disable-next-line
    return (state = initialState, action: any) => {
        const nextState = appReducer(state, action);

        if (
            action.payload &&
            action.payload.status &&
            action.payload.status === 403 &&
            action.payload.redirect === true
        ) {
            window.location.replace('/');
        }

        return nextState;
    };
};

export default createAppReducer;
