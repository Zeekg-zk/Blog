const sorted = require('../index')

test('should return true', () => {
  expect(sorted([])).toBe(true)
})

test('should return false', () => {
  expect(sorted([1, 5, 2, 3, 4])).toBe(false)
})