import { merge } from "ts-deepmerge";

// Extend object without mutating sources
// This is a simple wrapper on merge, in case something needs to change here (like library used etc.)
export function extend<T extends object>(
  target: T,
  ...sources: Array<Partial<T>>
) {
  return merge(target, ...sources) as T;
}
