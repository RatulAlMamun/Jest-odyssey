/**
 * ### .toContain(item)
 * - Use to check that an item is in an array.
 * - For testing the items in the array, this uses ===, a strict equality check
 * - item can be strings, sets, node lists and HTML collections.
 * =============================================================================
 */
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
})