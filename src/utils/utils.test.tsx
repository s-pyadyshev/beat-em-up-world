import {
  convertGameId,
  makeOtherPlatformLink,
  makeOtherPlatformName,
} from "./utils";

describe("Test convertGameId", () => {
  test("id is generated correctly", () => {
    expect(convertGameId("Vamf x1/2", "Arcade")).toEqual("vamfx12-arcade");
  });
});

describe("Test makeOtherPlatformLink", () => {
  test("id is generated correctly if game === string", () => {
    expect(
      makeOtherPlatformLink("Double Dragon III: The Rosetta Stone", "Arcade")
    ).toEqual("doubledragoniiitherosettastone-arcade");
  });
  test("id is generated correctly if game === object", () => {
    expect(
      makeOtherPlatformLink("Double Dragon III: The Rosetta Stone", {
        name: "Double Dragon III: The Rosetta Stone",
        platform: "Arcade",
      })
    ).toEqual("doubledragoniiitherosettastone-arcade");
  });
});

describe("Test makeOtherPlatformName", () => {
  test("id is generated correctly if game === string", () => {
    expect(makeOtherPlatformName("Arcade")).toEqual("Arcade");
  });

  test("id is generated correctly if game === object", () => {
    expect(
      makeOtherPlatformName({
        name: "Double Dragon III: The Rosetta Stone",
        platform: "Arcade",
      })
    ).toEqual("Arcade");
  });
});
