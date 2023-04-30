/**
 * ### .toBe(value)
 * - Use .toBe() to compare primitive values.
 * - Use to check referential identity of object instances
 */
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

const obj = {
  name: 'ratul',
  year: 2023,
};

describe('the obj', () => {
  test('has year 2023', () => {
    expect(obj.year).toBe(2023);
  });

  test('has a name ratul', () => {
    expect(obj.name).toBe('ratul');
  });
});