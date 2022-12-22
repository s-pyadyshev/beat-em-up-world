export const convertGameId = (name: string, platform: string) =>
  `${name}-${platform}`.replace(/[\s:&'./!?]/g, "").toLowerCase();

export const makeOtherPlatformLink = (
  name: string,
  game: { name: string; platform: string } | string
): string => {
  return typeof game === "string"
    ? convertGameId(name, game) // if various platform titles are the same
    : convertGameId(game.name, game.platform); // if they are different (handled as objects)
};

export const makeOtherPlatformName = (
  game:
    | {
        name: string;
        platform: string;
      }
    | string
) => (typeof game === "string" ? game : game.platform);
