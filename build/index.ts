import type {
  ReplaceMultipleStringParts,
  ReplaceStringPart,
  ReplaceAllStringParts,
  ReplaceOrderedStringParts,
  ReplaceStringPartGlobal,
} from "rolling-ts-utils";

export function replace<
  OriginalString extends string,
  Key extends string,
  Value extends string
>(
  str: OriginalString,
  key: Key,
  value: Value
): ReplaceStringPart<OriginalString, Value, Key> {
  return str.replace(new RegExp(`${key}`), value) as ReplaceStringPart<
    OriginalString,
    Value,
    Key
  >;
}

export function replaceGlobal<
  OriginalString extends string,
  Key extends string,
  Value extends string
>(
  str: OriginalString,
  key: Key,
  value: Value
): ReplaceStringPartGlobal<OriginalString, Value, Key> {
  return str.replace(
    new RegExp(`${key}`, "g"),
    value
  ) as ReplaceStringPartGlobal<OriginalString, Value, Key>;
}

export function replaceOrdered<
  OriginalString extends string,
  Values extends string[]
>(
  str: OriginalString,
  values: Values
): ReplaceOrderedStringParts<OriginalString, Values> {
  return values.reduce(
    (acc, value) => acc.replace(/{(.*?)}/, value),
    str
  ) as ReplaceOrderedStringParts<OriginalString, Values>;
}

export function replaceMultiple<
  OriginalString extends string,
  Keys extends Readonly<string[]>,
  Values extends Readonly<string[]>
>(
  str: OriginalString,
  Keys: Keys,
  Values: Values
): ReplaceMultipleStringParts<OriginalString, Keys, Values> {
  return Keys.reduce(
    (acc, key, i) => acc.replace(new RegExp(`${key}`), Values[i]),
    str
  ) as ReplaceMultipleStringParts<OriginalString, Keys, Values>;
}

export function replaceAll<OriginalString extends string, Value extends string>(
  str: OriginalString,
  value: Value
): ReplaceAllStringParts<OriginalString, Value> {
  return str.replace(/{(.*?)}/g, value) as ReplaceAllStringParts<
    OriginalString,
    Value
  >;
}
