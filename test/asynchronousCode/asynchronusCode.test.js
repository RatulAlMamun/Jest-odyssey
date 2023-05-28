/**
 * ### Promises
 * - Use to test async function
 * ========================================================
 */
async function fun1 () {
  return 1;
}
test('test async function then block', () => {
  return fun1().then(data => {
    expect(data).toBe(1);
  });
});


function fetchData(callback) {
  callback(null, data); // data return kora
}
/**
 * ### Async/Await
 * - Use to test async function
 * ========================================================
 */
async function divide (numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero!");
  } else {
    return numerator / denominator;
  }
}
test("should divide two numbers", async () => {
  await expect(divide(10,5)).resolves.toBe(2);
});
test("should reject if denominator is zero", async () => {
  await expect(divide(10, 0)).rejects.toThrow("Division by zero!");
});