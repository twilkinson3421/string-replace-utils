export declare class Replaceable extends String {
    constructor(value: string);
    extReplace(key: string, value: string): Replaceable;
    replaceMultiple(values: string[]): Replaceable;
    extReplaceAll(value: string): Replaceable;
    weakReplaceMultiple(values: {
        key: string;
        value: string;
    }[]): Replaceable;
}
