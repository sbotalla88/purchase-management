export const removeBackslash = (json: string): string => {
    return json.replace(/\\"/g, '"');
};
export const isOneInstanceOf = (list: Array<any>, obj: any) => {
    for (const key in list) {
        // eslint-disable-next-line
        if (list.hasOwnProperty(key)) {
            const instanceType = list[key];
            if (obj instanceof instanceType) {
                return true;
            }
        }
    }
    return false;
};

export const isNotOneInstanceOf = (list: Array<any>, obj: any) => {
    return !isOneInstanceOf(list, obj);
};

export const omitEmpty = (obj: any) => {
    const propNames = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < propNames.length; i++) {
        const propName = propNames[i];
        if (obj[propName] == null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    delete obj['$init'];
    return obj;
};

export const isJson = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};
