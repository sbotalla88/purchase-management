import {
    composeReducers,
    createFlushReducer,
    createGetWithPaginationReducer,
    createCreateInArrayReducer,
    createUpdateInArrayReducer,
} from '@redux/@reducers';

import initialState from './initialState';

const NAME = '@purchaseOrder';

// reducers
const getReducer = createGetWithPaginationReducer<IPurchaseOrder.Payload>(NAME, initialState);
const flushReducer = createFlushReducer(NAME, []);
const createReducer = createCreateInArrayReducer<IPurchaseOrder.Payload>(NAME, initialState);
const updateReducer = createUpdateInArrayReducer<IPurchaseOrder.Payload>(NAME, initialState);
export const SkipDateTemplateReducer = composeReducers<IPurchaseOrder.State>(initialState)(
    getReducer,
    flushReducer,
    createReducer,
    updateReducer
);

export default SkipDateTemplateReducer;
