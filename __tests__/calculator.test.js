import calculator from "./../functions/calculator";

describe("Calculator object", () => {
  test("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test("should multiply two numbers correctly", () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  test("should subtract two numbers correctly", () => {
    const result = calculator.subtract(3, 1);
    expect(result).toBe(2);
  });

  test("should divide two numbers correctly", () => {
    const result = calculator.divide(6, 2);
    expect(result).toBe(3);
  });

  test("should return an error when dividing by zero", () => {
    const result = calculator.divide(2, 0);
    expect(result).toBe("Error");
  });

  test("should divide correctly when the result is not wohle", () => {
    const result = calculator.divide(10, 3);
    expect(result).toBeCloseTo(3.33);
  });
});
