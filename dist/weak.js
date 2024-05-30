import { replace } from "./index.js";
/**
 * Replace multiple different occurances of matching strings
 * @param str The string before replacement
 * @param targets An array of `{key, value}` representing the string to look for, and its replacement value
 * @returns {string} The base string after replacement
 */
export function weakReplaceMultiple(str, targets) {
    return targets.reduce((str, { key, value }) => replace(str, key, value), str);
}
