import { replace } from "./index.js";

export function weakReplaceMultiple(
  str: string,
  targets: { key: string; value: string }[]
): string {
  return targets.reduce((str, { key, value }) => replace(str, key, value), str);
}
