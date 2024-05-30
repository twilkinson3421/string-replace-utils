export declare class Replaceable<OriginalString extends string> extends String {
    constructor(value: OriginalString);
    extReplace<Key extends string, Value extends string>(key: Key, value: Value): Replaceable<import("rolling-ts-utils").ReplaceStringPart<OriginalString, Value, Key>>;
    replaceGlobal<Key extends string, Value extends string>(key: Key, value: Value): Replaceable<import("rolling-ts-utils").ReplaceStringPartGlobal<OriginalString, Value, Key>>;
    replaceOrdered<Values extends string[]>(values: Values): Replaceable<import("rolling-ts-utils").ReplaceOrderedStringParts<OriginalString, Values, 0>>;
    replaceMultiple<Keys extends string[], Values extends string[]>(keys: Keys, values: Values): Replaceable<import("rolling-ts-utils").ReplaceMultipleStringParts<OriginalString, Keys, Values, 0>>;
    extReplaceAll<Value extends string>(value: Value): Replaceable<import("rolling-ts-utils").ReplaceStringPartGlobal<OriginalString, Value, `{${string}}`>>;
    weakReplaceMultiple(values: {
        key: string;
        value: string;
    }[]): Replaceable<string>;
    valueOf(): OriginalString;
}
