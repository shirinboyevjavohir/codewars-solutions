const addFive = require("../../8-kyu/39_56200d610758762fb0000002");

describe("addFive", () => {
  test("adds 5 to a positive number", () => {
    expect(addFive(1)).toBe(6);
  });

  test("adds 5 to a positive number", () => {
    expect(addFive(10)).toBe(15);
  });

  test("adds 5 to a positive number", () => {
    expect(addFive(-3)).toBe(2);
  });
});
