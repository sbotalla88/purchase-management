/**
 * Check Wild Card Pattern
 *
 * @param str
 * @param rule
 * @returns
 */
export const checkWildCardPattern = (str: string, rule: string): boolean => {
    return new RegExp('^' + rule.split('*').join('.*') + '$').test(str);
};
