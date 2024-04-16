import { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import ChartsPage from "../../../pages/ChartsPage";
import LinksPage from "../../../pages/LinksPage";
import AboutPage from "../../../pages/AboutPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { getRouteGameDetails } from "./const/router";
import GameDetailsPage from "../../../pages/GameDetailsPage";
import SecretPage from "../../../pages/SecretPage";

export enum AppRoutes {
  MAIN = "main",
  CHARTS = "charts",
  LINKS = "links",
  ABOUT = "about",
  GAME_DETAILS = "games",
  NOT_FOUND = "not_found",
  SECRET = "secret",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CHARTS]: "/charts",
  [AppRoutes.LINKS]: "/links",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.GAME_DETAILS]: "/games/:id",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.SECRET]: "/secret",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CHARTS]: {
    path: RoutePath.charts,
    element: <ChartsPage />,
  },
  [AppRoutes.LINKS]: {
    path: RoutePath.links,
    element: <LinksPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.GAME_DETAILS]: {
    path: getRouteGameDetails(":id"),
    element: <GameDetailsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.SECRET]: {
    path: RoutePath.secret,
    element: <SecretPage />,
  },
};
