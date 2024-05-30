import { replace } from "./index.js";
export function weakReplaceMultiple(str, targets) {
    return targets.reduce((str, { key, value }) => replace(str, key, value), str);
}
