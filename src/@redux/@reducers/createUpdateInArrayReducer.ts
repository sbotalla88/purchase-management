import { AnyAction } from 'redux';

type Identity = string | number;

/**
 * Handles update for an item in an array reducer. Requires "id" property
 * modifies isUpdating of the state
 *
 * @param baseName
 * @param initialState
 * @param options
 */
export function createUpdateInArrayReducer<DataType extends { id: Identity }>(
    baseName: string,
    initialState: StateWithArrayPayload<DataType>,
    options: ReducerOptions = {}
) {
    return function updateInArrayReducer(state: StateWithArrayPayload<DataType> | undefined, action: AnyAction) {
        const { flushOnError = false } = options;
        switch (action.type) {
            case `${baseName}/UPDATE_START`:
                return {
                    ...state,
                    isUpdating: true,
                };

            case `${baseName}/UPDATE_ERROR`:
                return {
                    ...state,
                    isUpdating: false,
                    data: flushOnError ? initialState.data : state?.data,
                };
            case `${baseName}/UPDATE_SUCCESS`: {
                const payloadData = action.payload;
                delete payloadData.snack;

                if (Array.isArray(action.payload)) {
                    // if updated several fields
                    const updatedFields = payloadData;
                    const newData = [...(state?.data ?? [])];

                    // eslint-disable-next-line
                    updatedFields.map((newField: any) => {
                        const replaceIndex = state?.data?.findIndex((item) => item.id === newField.id) ?? 0;
                        newData.splice(replaceIndex, 1, newField);
                        return newField;
                    });

                    return {
                        ...state,
                        isUpdating: false,
                        data: [...newData],
                    };
                }
                const { id } = payloadData;

                const replaceIndex = state?.data?.findIndex((item) => item.id === id) ?? 0;

                const newData = [...(state?.data ?? [])];

                newData.splice(replaceIndex, 1, {
                    ...(state && state.data ? state?.data[replaceIndex] : {}),
                    ...payloadData,
                });

                return {
                    ...state,
                    isUpdating: false,
                    data: [...newData],
                };
            }

            default:
                return state ?? {};
        }
    };
}

export default createUpdateInArrayReducer;
