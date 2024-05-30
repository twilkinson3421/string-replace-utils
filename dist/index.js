export function replace(str, key, value) {
    return str.replace(new RegExp(`${key}`), value);
}
export function replaceGlobal(str, key, value) {
    return str.replace(new RegExp(`${key}`, "g"), value);
}
export function replaceOrdered(str, values) {
    return values.reduce((acc, value) => acc.replace(/{(.*?)}/, value), str);
}
export function replaceMultiple(str, Keys, Values) {
    return Keys.reduce((acc, key, i) => acc.replace(new RegExp(`${key}`), Values[i]), str);
}
export function replaceAll(str, value) {
    return str.replace(/{(.*?)}/g, value);
}
