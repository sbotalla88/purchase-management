/**
 * Replaces state with initial state
 *
 * @param baseName
 * @param initialDataState
 */
// eslint-disable-next-line
export const createFlushReducer = (baseName: string, initialDataState: any) => (state: any, action: any) => {
    switch (action.type) {
        case `${baseName}/FLUSH`:
            return {
                ...state,
                data: initialDataState,
            };

        default:
            return state;
    }
};

export default createFlushReducer;
