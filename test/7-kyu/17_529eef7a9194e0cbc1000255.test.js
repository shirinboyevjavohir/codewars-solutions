const isAnagram = require("../../7-kyu/17_529eef7a9194e0cbc1000255");

describe("isAnagram", () => {
  test("Is anagram check", () => {
    expect(isAnagram("foefet", "toffee")).toBe(true);
  });
  test("Is anagram check", () => {
    expect(isAnagram("Buckethead", "DeathCubeK")).toBe(true);
  });
  test("Is anagram check", () => {
    expect(isAnagram("dumble", "bumble")).toBe(false);
  });
  test("Is anagram check", () => {
    expect(isAnagram("apple", "pale")).toBe(false);
  });
});
