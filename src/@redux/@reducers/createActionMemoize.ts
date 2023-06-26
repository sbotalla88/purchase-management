// memo for a last param entry
/* eslint-disable */
type ArgumentTypes<F> = F extends (..._args: infer A) => any ? A : never;

/**
 * wrap an action creator with createActionMemoize
 * if action creator receives same params, the action won't be dispatched
 * @param func
 */
export function createActionMemoize(func: any) {
    let lastParams: any = null;
    let lastRes = null;

    return (...params: ArgumentTypes<typeof func>) => {
        const isEqual = JSON.stringify(lastParams) === JSON.stringify(params);
        if (isEqual) {
            // emmits random action
            return { type: 'action__memo__throw' };
        }
        lastParams = params;
        lastRes = func(...params);
        return lastRes;
    };
}

export default createActionMemoize;
