# **String Replace Utils**

A small library which exposes some helpful string-replacement functions, including exact types. Types used here come from [rolling-ts-utils](https://github.com/twilkinson3421/rolling-ts-utils).

> **⚠️ Pay attention to the use of `as const` throughout this document. Not using `as const` after string and array initialisation will result in generic types being used, or unexpected behaviour!**

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
- `value`: The string to be inserted in place of the first occurance of `key`
- _If no match is found, the original string is returned_

```ts
const str = "This is an example {noun}" as const;

const sentence = replace(str, "{noun}", "dog");
//    ^? typeof sentence = "This is an example dog"
```

### `replaceGlobal(str, key, value)`

- `str`: The original string
- `key`: The substring to be replaced
- `value`: The string to be inserted in place of **ALL** occurances of `key`
- _If no match is found, the original string is returned_

```ts
const str = "This is {word} {word} {thing}" as const;

const sentence = replaceGlobal(str, "{word}", "dog");
//    ^? typeof sentence = "This is dog dog {thing}"
```

### `replaceOrdered(str, values)`

- `str`: The original string
- `values`: An array containing the strings to be inserted in place of, in order, each occurance of `{string}`, where `string` is any string
- _If no `{string}` is found, the original string is returned_

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = replaceOrdered(str, ["a", "sneaky", "cat"] as const);
//    ^? typeof sentence = "This is a sneaky cat."
```

### `replaceMultiple(str, keys, values)`

- `str`: The original string
- `keys`: An array containing the substrings to be replaced
- `values`: An array of strings to be inserted in place of the key at the same position in the `Keys` array
- _If no match is found, the key-value pair has no impact_

```ts
const str = "This is {article} {adjective} {noun}." as const;

const sentence = replaceMultiple(
  str,
  ["{article}", "{adjective}", "{noun}"] as const,
  ["a", "sneaky", "cat"] as const
);
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

A weak version of `replaceMultiple` is provided in `weak.ts`. This function does not support exact types, but allows key-value pairs to be passed as an array of `{key, value}` objects.

_This was more useful in the past when the `replaceMultiple` function had the same functionality as the current `replaceOrdered` function (thus this was the only way to replace specified substrings)_:

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

_String Replace Utils_ also provides a class, `Replaceable`, containing all of the methods provided by the pure functions, to allow for chaining methods.

As the class extends `String`, it can be used in the same way as a normal string _(though asserting `as string`, or widening accepted parameter-types to include `Replaceable<string>` may be necessary to prevent Type errors on functions which take string parameters)_. Alternatively, use `.valueOf()` to get the raw string, as in the examples below.

**⚠️ Some methods do not share the same name as the pure functions:**

- **`replace` becomes `extReplace` to avoid conflict with `String.prototype.replace()`**
- **`replaceAll` becomes `extReplaceAll` to avoid conflict with `String.prototype.replaceAll()`**

```ts
const str = new Replaceable("This is {article} {adjective} {noun}." as const);

const sentence = str
  .extReplace("{article}", "a")
  .extReplace("{adjective}", "sneaky")
  .extReplace("{noun}", "cat")
  .valueOf();
//    ^? typeof sentence = "This is a sneaky cat."
```

```ts
const str = new Replaceable("This is {article} {adjective} {noun}." as const);

const sentence = str
  .replaceMultiple(
    ["{article}", "{adjective}", "{noun}"] as const,
    ["a", "pesky", "goose"] as const
  )
  .valueOf();
//    ^? typeof sentence = "This is a pesky goose."
```
