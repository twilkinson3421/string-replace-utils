import { replace as func_replace, replaceAll as func_replaceAll, replaceMutiple as func_replaceMutiple } from "./index.js";
import { weakReplaceMultiple as weak_replaceMutiple } from "./weak.js";
export class Replaceable extends String {
    constructor(value) {
        super(value);
    }
    extReplace(key, value) {
        return new Replaceable(func_replace(this.valueOf(), key, value));
    }
    replaceMultiple(values) {
        return new Replaceable(func_replaceMutiple(this.valueOf(), values));
    }
    extReplaceAll(value) {
        return new Replaceable(func_replaceAll(this.valueOf(), value));
    }
    weakReplaceMultiple(values) {
        return new Replaceable(weak_replaceMutiple(this.valueOf(), values));
    }
}
