import type {
  ReplaceMultipleStringParts,
  ReplaceStringPart,
  ReplaceAllStringParts,
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

export function replaceMutiple<
  OriginalString extends string,
  Values extends string[]
>(
  str: OriginalString,
  values: Values
): ReplaceMultipleStringParts<OriginalString, Values> {
  return values.reduce(
    (acc, value) => acc.replace(/{{(.*?)}}/, value),
    str
  ) as ReplaceMultipleStringParts<OriginalString, Values>;
}

export function replaceAll<OriginalString extends string, Value extends string>(
  str: OriginalString,
  value: Value
): ReplaceAllStringParts<OriginalString, Value> {
  return str.replace(/{{(.*?)}}/g, value) as ReplaceAllStringParts<
    OriginalString,
    Value
  >;
}
