export const convertGameId = (name: string, platform: string) =>
  `${name}-${platform}`.replace(/[\s:&'./!?]/g, "").toLowerCase();
