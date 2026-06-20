import analyzeArray from "../functions/analyzeArray";

test("Should return an object with 0 values if the array's length is zero", () => {
  const result = analyzeArray([]);
  const expected = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };
  expect(result).toEqual(expected);
});

test("Should return correct values #1", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(result).toEqual(expected);
});

test("Should return correct values #2", () => {
  const result = analyzeArray([2, 5, 1, 7]);
  const expected = {
    average: 3.75,
    min: 1,
    max: 7,
    length: 4,
  };
  expect(result).toEqual(expected);
});

test("Should return correct values #3", () => {
  const result = analyzeArray([-2, 0, 4, 2, 5]);
  const expected = {
    average: 1.8,
    min: -2,
    max: 5,
    length: 5,
  };
  expect(result).toEqual(expected);
});
