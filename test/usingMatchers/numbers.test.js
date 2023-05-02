/**
 * ### .toBeGreaterThan(number | bigint)
 * ======================================
 */
test('greater than 10', () => {
  expect(20 + 2).toBeGreaterThan(10);
});

/**
 * ### .toBeGreaterThanOrEqual(number | bigint)
 * ==============================================
 */
test('greater than or equal 10', () => {
  expect(20 + 2).toBeGreaterThanOrEqual(10);
});

/**
 * ### .toBeLessThan(number | bigint)
 * ==============================================
 */
test('less than 10', () => {
  expect(20 - 12).toBeLessThan(10);
});

/**
 * ### .toBeLessThanOrEqual(number | bigint)
 * ==============================================
 */
test('less than or equal 10', () => {
  expect(10).toBeLessThanOrEqual(10);
});

/**
 * ### .toBeCloseTo(number, numDigits?)
 * - numDigits params decide how many decimal point is going to check
 * ===================================================================
 */
test('check approximate equality for floating point numbers', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});