import capitalize from "../functions/capitalize ";

test("should return nothing when string length is zero", () => {
  expect(capitalize("")).toBe("");
});

test("should return same string if the string doesnt start with a letter", () => {
  expect(capitalize("031dzx@")).toBe("031dzx@");
});

test("should return a valid word with its first letter capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("should return the word capitalized if its length is 1", () => {
  expect(capitalize);
});
