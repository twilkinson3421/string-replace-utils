# **String Replace Utils**

A small library which exposes some helpful string-replacement functions, including exact types. Types used here come from [rolling-ts-utils](https://github.com/twilkinson3421/rolling-ts-utils).

## Installation

```bash
npm install --save string-replace-utils
```

## Basic Usage

```ts
import { replace } from "string-replace-utils";

const str = "This is an example {noun}" as const;

const sentence = replace(str, "{noun}", "dog");
//    ^? typeof sentence = "This is an example dog"
```

## API Reference

### `replace(str, key, value)`

- `str`: The original string
- `key`: The substring to be replaced
- `value`: The string to be inserted in place of the key
- _If no match is found, the original string is returned_

```ts
const str = "This is an example {noun}" as const;

const sentence = replace(str, "{noun}", "dog");
//    ^? typeof sentence = "This is an example dog"
```

### `replaceMutiple(str, values)`

- `str`: The original string
- `values`: An array containing the strings to be inserted in place of, in order, each occurance of `{string}`, where `string` is any string
- _If no `{string}` is found, the original string is returned_

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = replaceMutiple(str, ["a", "sneaky", "cat"]);
//    ^? typeof sentence = "This is a sneaky cat."
```

### `replaceAll(str, value)`

- `str`: The original string
- `value`: The string to be inserted in place of **ALL** occurences of `{string}`

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = replaceAll(str, "cat");
//    ^? typeof sentence = "This is a cat cat cat."
```

### Weak Functions

A weak version of `replaceMultiple` is provided in `weak.ts`. This function does not support exact types, but is more powerful than the regular `replaceMutiple` function, as it allows strings to be matched by key-value pairs:

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = weakReplaceMultiple(str, [
  { key: "{article}", value: "a" },
  { key: "{adjective}", value: "sneaky" },
  { key: "{noun}", value: "cat" },
]);
//    ^? "This is a sneaky cat."
//    typeof sentence = string
```

### Replaceable Class

_String Replace Utils_ also provides a class, `Replaceable`, which allows `replace`, `replaceMutiple`, and `replaceAll` to be chained together, or to provide the methods on a function return value.

As the class extends `String`, it can be used in the same way as a normal string _(though asserting `as string`, or widening accepted parameter-types to include `Replaceable` may be necessary to prevent Type errors on functions which take string parameters)_.

**Some methods do not share the same name as the pure functions:**

- **`replace` becomes `extReplace`**
- **`replaceAll` becomes `extReplaceAll`**

_Be aware that exact types will not work when using the `Replaceable` type as it is not possible to determine the exact type of the constructor parameter_

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = new Replaceable(str);

const modified = sentence
  .extReplace("{article}", "a")
  .extReplace("{adjective}", "sneaky")
  .extReplace("{noun}", "cat");
//    ^? "This is a sneaky cat"
//    typeof sentence = Replaceable
```
