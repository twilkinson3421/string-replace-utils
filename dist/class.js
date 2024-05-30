import { replace as func_replace, replaceAll as func_replaceAll, replaceGlobal as func_replaceGlobal, replaceMultiple as func_replaceMultiple, replaceOrdered as func_replaceOrdered } from "./index.js";
import { weakReplaceMultiple as weak_replaceMultiple } from "./weak.js";
export class Replaceable extends String {
    constructor(value) {
        super(value);
    }
    extReplace(key, value) {
        return new Replaceable(func_replace(this.valueOf(), key, value));
    }
    replaceGlobal(key, value) {
        return new Replaceable(func_replaceGlobal(this.valueOf(), key, value));
    }
    replaceOrdered(values) {
        return new Replaceable(func_replaceOrdered(this.valueOf(), values));
    }
    replaceMultiple(keys, values) {
        return new Replaceable(func_replaceMultiple(this.valueOf(), keys, values));
    }
    extReplaceAll(value) {
        return new Replaceable(func_replaceAll(this.valueOf(), value));
    }
    weakReplaceMultiple(values) {
        return new Replaceable(weak_replaceMultiple(this.valueOf(), values));
    }
    valueOf() {
        return this.valueOf();
    }
}
