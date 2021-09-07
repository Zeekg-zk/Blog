function defaultComparator(a, b) {
  return a - b;
}

module.exports = function checkSort(array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected Array, got ${typeof array}`);
  }
  comparator = comparator || defaultComparator;
  for (let i = 0, len = array.length; i < len; i++) {
    if(comparator(array[i], array[i + 1]) > 0) {
      return false;
    }
  }
  return true;
}