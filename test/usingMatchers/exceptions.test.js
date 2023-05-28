/**
 * ### .toThrow(error?)
 * - Use to test that a function throws when it is called.
 * =============================================================================
 */
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function func1() {
  throw new CustomError('This is a custom error');
}
test('throws on error', () => {
  // check if the function throw any error
  expect(func1).toThrow();
  // check if the function throw specific error object
  expect(func1).toThrow(CustomError);
  // check if the function throw error message with specific pattern - regex
  expect(func1).toThrow(/custom/);
  // check if the function throw error message with specific substring
  expect(func1).toThrow('custom');
  // check if the function throw error message match with exact
  expect(func1).toThrow(new Error('This is a custom error'));
});