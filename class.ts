import {
    replace as func_replace, replaceAll as func_replaceAll, replaceMutiple as func_replaceMutiple
} from "./index.js";
import { weakReplaceMultiple as weak_replaceMutiple } from "./weak.js";

export class Replaceable extends String {
  constructor(value: string) {
    super(value);
  }

  public extReplace(key: string, value: string) {
    return new Replaceable(func_replace(this.valueOf(), key, value));
  }

  public replaceMultiple(values: string[]) {
    return new Replaceable(func_replaceMutiple(this.valueOf(), values));
  }

  public extReplaceAll(value: string) {
    return new Replaceable(func_replaceAll(this.valueOf(), value));
  }

  public weakReplaceMultiple(values: { key: string; value: string }[]) {
    return new Replaceable(weak_replaceMutiple(this.valueOf(), values));
  }
}
