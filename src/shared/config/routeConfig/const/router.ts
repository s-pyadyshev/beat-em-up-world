export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  GAME_DETAILS = "game_details",
  FORBIDDEN = "forbidden",
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteGameDetails = (id: string) => `/games/${id}`;
export const getRouteForbidden = () => "/forbidden";
