import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ChartsPage from "../../../pages/ChartsPage";
import GameCard from "../../../components/GameCard";
import { MainPage } from "../../../pages/MainPage";
import { routeConfig } from "../../../shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
