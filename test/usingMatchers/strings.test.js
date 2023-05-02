/**
 * ### .toMatch(regexp | string)
 * - Use to check that a string matches a regular expression.
 * - Use to check that a string matches a string.
 * ==============================================
 */
test('string match using toMatch', () => {
  expect('Check for substring on this string using regexp').toMatch(/substring/);
  expect('Check for substring on this string using regexp').toMatch(new RegExp('substring'));
  expect('grapefruits').toMatch('fruit');
});