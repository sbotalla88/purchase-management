import {
    composeReducers,
    createFlushReducer,
    createGetWithPaginationReducer,
    createCreateInArrayReducer,
    createUpdateInArrayReducer,
} from '@redux/@reducers';

import initialState from './initialState';

const NAME = '@tagMgmt';

// reducers
const getReducer = createGetWithPaginationReducer<ITag.Payload>(NAME, initialState);
const flushReducer = createFlushReducer(NAME, []);
const createReducer = createCreateInArrayReducer<ITag.Payload>(NAME, initialState);
const updateReducer = createUpdateInArrayReducer<ITag.Payload>(NAME, initialState);
export const TagMgmtReducer = composeReducers<ITag.State>(initialState)(
    getReducer,
    flushReducer,
    createReducer,
    updateReducer
);

export default TagMgmtReducer;
