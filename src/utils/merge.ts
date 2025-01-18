function isObject(item: unknown): boolean {
  return item !== null && typeof item === "object" && !Array.isArray(item);
}

export function merge<T extends object>(
  target: T,
  ...sources: Array<Partial<T>>
): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        if (isObject(sourceValue) && isObject(target[key])) {
          target[key] = merge(target[key] as never, sourceValue as never);
        } else {
          (target as Partial<T>)[key] = sourceValue;
        }
      }
    }
  }
  return merge(target, ...sources);
}
