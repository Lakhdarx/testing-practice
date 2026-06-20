import cipher from "./../functions/ceasarCipher";

describe("Caesar Cipher unit tests", () => {
  test("should return nothing when the strings length is zero", () => {
    expect(cipher("")).toBe("");
  });

  //   Length 1 string (no overlapping)
  test("1 Letter shift with no overlapping #1", () => {
    expect(cipher("d", 3)).toBe("g");
  });

  test("1 Letter shift with no overlapping #1", () => {
    expect(cipher("d", 0)).toBe("d");
  });
  //   Long string (no overlapping)
  test("String with no overlapping shift #1", () => {
    expect(cipher("afsegb", 5)).toBe("fkxjlg");
  });
  test("String with no overlapping shift #2", () => {
    expect(cipher("Todog", 3)).toBe("Wrgrj");
  });

  test("String with no overlapping shift #3", () => {
    expect(cipher("Todog", 0)).toBe("Todog");
  });

  //   Length 1 string (overlapping)

  test("1 Letter shift with no overlapping #1", () => {
    expect(cipher("y", 6)).toBe("e");
  });

  test("1 Letter shift with no overlapping #2", () => {
    expect(cipher("Z", 1)).toBe("A");
    1;
  });

  //   Long string (overlapping)

  test("String with overlapping shift #1", () => {
    expect(cipher("yezwcn", 3)).toBe("bhczfq");
  });
  test("String with overlapping shift #2", () => {
    expect(cipher("zzcxzwa", 2)).toBe("bbezbyc");
  });

  test("String with overlapping shift #3", () => {
    expect(cipher("Zodog", 2)).toBe("Bqfqi");
  });

  // Non alphabetical characters should stay  the same
  test("Non alphabetical characters should stay the same", () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
