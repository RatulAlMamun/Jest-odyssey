/**
 * ### Repeating Setup
 * ========================================================
 */
async function fetchData() {
  return 'peanut butter';
}

beforeAll(() => {
  console.log('beforeAll');
});

afterAll(() => {
  console.log('afterAll');
});

beforeEach(() => {
  console.log('before each');
});

afterEach(() => {
  console.log('after each');
});

test('the data is peanut butter', () => {
  console.log('test 3');
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('some random test 1', () => {
  console.log('test 1');
  expect(true).toBeTruthy();
})

test('some random test 2', () => {
  console.log('test 2');
  expect(true).toBeTruthy();
})

