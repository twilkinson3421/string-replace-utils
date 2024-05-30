export function replace(str, key, value) {
    return str.replace(new RegExp(`${key}`), value);
}
export function replaceMutiple(str, values) {
    return values.reduce((acc, value) => acc.replace(/{{(.*?)}}/, value), str);
}
export function replaceAll(str, value) {
    return str.replace(/{{(.*?)}}/g, value);
}
