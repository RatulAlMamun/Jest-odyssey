const sum = require('../app/sum');

test('1 plus 2 adds up 3', () => {
  expect(sum(1, 2)).toBe(3);
});