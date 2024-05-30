import {
    replace as func_replace, replaceAll as func_replaceAll, replaceMultiple as func_replaceMultiple,
    replaceOrdered as func_replaceOrdered
} from "./index.js";
import { weakReplaceMultiple as weak_replaceMultiple } from "./weak.js";

export class Replaceable<OriginalString extends string> extends String {
  constructor(value: OriginalString) {
    super(value);
  }

  public extReplace<Key extends string, Value extends string>(
    key: Key,
    value: Value
  ) {
    return new Replaceable(func_replace(this.valueOf(), key, value));
  }

  public replaceOrdered<Values extends string[]>(values: Values) {
    return new Replaceable(func_replaceOrdered(this.valueOf(), values));
  }

  public replaceMultiple<Keys extends string[], Values extends string[]>(
    keys: Keys,
    values: Values
  ) {
    return new Replaceable(func_replaceMultiple(this.valueOf(), keys, values));
  }

  public extReplaceAll<Value extends string>(value: Value) {
    return new Replaceable(func_replaceAll(this.valueOf(), value));
  }

  public weakReplaceMultiple(values: { key: string; value: string }[]) {
    return new Replaceable(weak_replaceMultiple(this.valueOf(), values));
  }

  public override valueOf(): OriginalString {
    return this.valueOf();
  }
}
