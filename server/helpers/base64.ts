export const encodeBase64 = (plain: string): string => {
    return Buffer.from(plain || '').toString('base64');
};

export const decodeBase64 = (encoded: string): string => {
    return Buffer.from(encoded || '', 'base64').toString('utf8');
};

export const urlEncode = (plain: string): string => {
    const encoded = encodeBase64(plain);
    return encodeURIComponent(encoded);
};

export const urlDecode = (encoded: string): string => {
    encoded = decodeURIComponent(encoded);
    return decodeBase64(encoded);
};
