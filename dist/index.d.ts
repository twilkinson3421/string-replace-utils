import type { ReplaceMultipleStringParts, ReplaceStringPart, ReplaceAllStringParts } from "rolling-ts-utils";
export declare function replace<OriginalString extends string, Key extends string, Value extends string>(str: OriginalString, key: Key, value: Value): ReplaceStringPart<OriginalString, Value, Key>;
export declare function replaceMutiple<OriginalString extends string, Values extends string[]>(str: OriginalString, values: Values): ReplaceMultipleStringParts<OriginalString, Values>;
export declare function replaceAll<OriginalString extends string, Value extends string>(str: OriginalString, value: Value): ReplaceAllStringParts<OriginalString, Value>;
