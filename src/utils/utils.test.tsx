import { capitalize, convertGameId } from "./utils";

describe("Test capitalize", () => {
  test("First letter is capitalized", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });
});

describe("Test convertGameId", () => {
  test("id is generated correctly", () => {
    expect(convertGameId("Vamf x1/2", "Arcade")).toEqual("vamfx12-arcade");
  });
});
