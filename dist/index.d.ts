import type { ReplaceMultipleStringParts, ReplaceStringPart, ReplaceAllStringParts, ReplaceOrderedStringParts, ReplaceStringPartGlobal } from "rolling-ts-utils";
export declare function replace<OriginalString extends string, Key extends string, Value extends string>(str: OriginalString, key: Key, value: Value): ReplaceStringPart<OriginalString, Value, Key>;
export declare function replaceGlobal<OriginalString extends string, Key extends string, Value extends string>(str: OriginalString, key: Key, value: Value): ReplaceStringPartGlobal<OriginalString, Value, Key>;
export declare function replaceOrdered<OriginalString extends string, Values extends string[]>(str: OriginalString, values: Values): ReplaceOrderedStringParts<OriginalString, Values>;
export declare function replaceMultiple<OriginalString extends string, Keys extends Readonly<string[]>, Values extends Readonly<string[]>>(str: OriginalString, Keys: Keys, Values: Values): ReplaceMultipleStringParts<OriginalString, Keys, Values>;
export declare function replaceAll<OriginalString extends string, Value extends string>(str: OriginalString, value: Value): ReplaceAllStringParts<OriginalString, Value>;
