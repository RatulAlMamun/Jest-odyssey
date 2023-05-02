/**
 * ### .toBeNull()
 * - Use .toBeNull() to check for exact null value.
 * - .toBeNull() is same as .toBe(null)
 * ==========================================================================
 */
function fun1() {
  return null;
}

test('fun1 returns null', () => {
  expect(fun1()).toBeNull();
});

/**
 * ### .toBeUndefined()
 * - Use .toBeUndefined() to check for exact undefined value.
 * - .toBeUndefined() is same as .toBe(undefined). but it's better practice to avoid referring to undefined directly in your code.
 * ==========================================================================
 */
function fun2() {
  return undefined;
}
test('fun2 is undefined', () => {
  expect(fun2()).toBeUndefined();
});

/**
 * ### .toBeDefined()
 * - Use .toBeDefined() to check that a variable is not undefined.
 * - .toBeDefined() is same as .not.toBe(undefined). but it's better practice to avoid referring to undefined directly in your code.
 * ==========================================================================
 */
function fun3() {
  return 3;
}
test('fun3 is defined', () => {
  expect(fun3()).toBeDefined();
});

/**
 * ### .toBeTruthy()
 * - Use .toBeTruthy() to check to ensure a value is true in a boolean context.
 * - There are six falsy values: false, 0, '', null, undefined, and NaN. Without these all are true
 * ==========================================================================
 */
function fun4() {
  return 3; 
}
test('fun4 returns truthy value', () => {
  expect(fun4()).toBeTruthy();
});

/**
 * ### .toBeFalsy()
 * - Use .toBeFalsy() to check to ensure a value is false in a boolean context.
 * - There are six falsy values: false, 0, '', null, undefined, and NaN.
 * ==========================================================================
 */

function fun5() {
  return ''; 
}
test('fun4 returns falsy value', () => {
  expect(fun5()).toBeFalsy();
});