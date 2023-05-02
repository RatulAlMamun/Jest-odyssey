/**
 * ### .toBe(value)
 * - Use .toBe() to compare primitive values.
 * - Use to check referential identity of object instances
 * ==========================================================================
 */
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

const obj1 = {
  name: 'ratul',
  year: 2023,
};

describe('the obj', () => {
  test('has year 2023', () => {
    expect(obj1.year).toBe(2023);
  });

  test('has a name ratul', () => {
    expect(obj1.name).toBe('ratul');
  });
});

/**
 * ### .toEqual(value)
 * - Use .toEqual() to compare deep values.
 * - Use to compare recursively all properties of object instances
 * =============================================================================
 */
test('object assignment and check equality', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

const obj2 = {
  name: 'ratul',
  year: 2023,
};

describe('check the deep equality of obj1 and obj2', () => {
  test('have all the same properties', () => {
    expect(obj1).toEqual(obj2);   // test pass
  });
  test('are not the exact same can', () => {
    expect(obj1).not.toBe(obj2);      // test fail, so using not modifiers
  });
});

/**
 * ### .toStrictEqual(value)
 * - Use .toStrictEqual() to test that objects have the same structure and type.
 * ===============================================================================
 */
class Class1 {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

describe('Class1 strict equality test, differ from toEqual()', () => {
  test('are not semantically the same', () => {
    expect(new Class1('lemon')).toEqual({flavor: 'lemon'});           //  test pass
    expect(
      new Class1('lemon')
    ).not.toStrictEqual({flavor: 'lemon'}); // test faile, so using not modifiers
  });
});