function defaultComparator(a: number, b: number): number {
  return a - b;
}

export function checksort(
  array: number[],
  comparator?: (a: number, b: number) => number
) {
  comparator = comparator || defaultComparator;
  for (let i = 1; i < array.length; i++) {
    if (comparator(array[i - 1], array[i]) > 0) {
      return false;
    }
  }
  return true
}
