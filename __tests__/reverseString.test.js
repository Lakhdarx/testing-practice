import reverse from "./../functions/reverseString";

test("should return nothing when string length is zero", () => {
  expect(reverse("")).toBe("");
});

test("should return same string when its length is 1", () => {
  expect(reverse("L")).toBe("L");
});

test("should return an actual reverse #1", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("should return an actual reverse #2", () => {
  expect(reverse("Dog")).toBe("goD");
});
