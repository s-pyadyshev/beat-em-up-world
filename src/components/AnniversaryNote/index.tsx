import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { Link } from "react-router-dom";
import { addWeeks, eachDayOfInterval } from "date-fns";
import { GameCardType } from "../../types/GameCard";

const AnniversaryNote = () => {
  const gamesList = useSelector((state: ApplicationState) =>
    state.gamesList.gamesList.map((game: GameCardType) => {
      return {
        releasedate: game.releasedate,
        releaseYear: game.releaseYear,
        name: game.name,
        platform: game.platform,
      };
    })
  );
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

  const gamesInRange: string[] = gamesList.filter(
    ({ releasedate, releaseYear }: any) =>
      anniversaryRange.includes(releasedate.slice(5)) &&
      (currentYear - releaseYear) % 10 === 0
  );

  return !gamesInRange.length ? null : (
    <div>
      <b>Upcoming anniversaries</b>
      {gamesInRange.map(({ releasedate, releaseYear, name, platform }: any) => (
        <div key={name + releasedate}>
          <span>{currentYear - releaseYear}th anniversary of </span>
          <Link
            to={`/${name}-${platform}`
              .replace(/[\s:&'./!?]/g, "")
              .toLowerCase()}
          >
            {name} <span> [{platform}]</span>
          </Link>
          <span> ({releasedate})</span>
        </div>
      ))}
    </div>
  );
};

export default AnniversaryNote;
