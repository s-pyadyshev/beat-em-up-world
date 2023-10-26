import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addWeeks, eachDayOfInterval } from "date-fns";
import { GameCardType } from "../../types/GameCard";
import { createSelector } from "reselect";
import { selectGamesList } from "../../selectors";

// TODO Refactor when backend is done

interface GameData {
  releasedate: string;
  releaseYear: number;
  name?: string;
  platform?: string;
}

export const selectGamesByRelease = createSelector(selectGamesList, (games) =>
  games.map(({ releasedate, releaseYear, name, platform }: GameCardType) => {
    return {
      releasedate: releasedate,
      releaseYear: releaseYear,
      name: name,
      platform: platform,
    };
  })
);

const AnniversaryNote = () => {
  const gamesListByRelease = useSelector(selectGamesByRelease);

  const todayDate: string = new Date().toISOString().slice(0, -14);
  const currentYear = new Date().getFullYear();
  const todayDateSplit: string[] = todayDate.split("-");
  const endAnniversaryRange: string = addWeeks(
    new Date(+todayDateSplit[0], +todayDateSplit[1] - 1, +todayDateSplit[2]),
    1
  )
    .toISOString()
    .slice(0, -14);
  const endAnniversaryRangeSplit: string[] = endAnniversaryRange.split("-");

  const anniversaryRange: string[] = eachDayOfInterval({
    start: new Date(
      +todayDateSplit[0],
      +todayDateSplit[1] - 1,
      +todayDateSplit[2]
    ),
    end: new Date(
      +endAnniversaryRangeSplit[0],
      +endAnniversaryRangeSplit[1] - 1,
      +endAnniversaryRangeSplit[2]
    ),
  }).map((date: Date) => date.toISOString().slice(5, -14));

  const gamesInRange: string[] = gamesListByRelease.filter(
    ({ releasedate, releaseYear }: GameData) =>
      anniversaryRange.includes(releasedate.slice(5)) &&
      currentYear - releaseYear !== 0 &&
      (currentYear - releaseYear) % 10 === 0
  );

  const renderGamesInRange = () => {
    return gamesInRange.map(
      ({ releasedate, releaseYear, name, platform }: any) => (
        <div key={name + releasedate}>
          <span>{currentYear - releaseYear}th anniversary of </span>
          <Link
            to={`games/${name}-${platform}`
              .replace(/[\s:&'./!?]/g, "")
              .toLowerCase()}
          >
            {name} <span> [{platform}]</span>
          </Link>
          <span> ({releasedate})</span>
        </div>
      )
    );
  };

  return !gamesInRange.length ? null : (
    <div>
      <b>Upcoming anniversaries</b>
      {renderGamesInRange()}
    </div>
  );
};

export default AnniversaryNote;
