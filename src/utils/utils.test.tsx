// import { strict as assert } from "assert"; // assert by default is considered legacy
import capitalize from "./capitalize";
// import assert from "power-assert";

describe("Test Capitalize", () => {
  test("First letter is capitalized", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });
});
