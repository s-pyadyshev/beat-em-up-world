export const capitalize = (text: string) => {
  if (text === "") {
    return "";
  }
  const firstSymbol = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstSymbol}${restSubstring}`;
};

export const convertGameId = (name: string, platform: string) =>
  `${name}-${platform}`.replace(/[\s:&'./!?]/g, "").toLowerCase();
