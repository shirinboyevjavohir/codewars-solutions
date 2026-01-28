const closeCompare = require("../../8-kyu/42_56453a12fcee9a6c4700009c");

describe("closeCompare", () => {
  test("closeCompare testing 1", () => {
    expect(closeCompare(4, 5)).toBe(-1);
    expect(closeCompare(2, 5, 3)).toBe(0);
    expect(closeCompare(5, 5)).toBe(0);
    expect(closeCompare(1.99, 5, 3)).toBe(-1);
  });
});
