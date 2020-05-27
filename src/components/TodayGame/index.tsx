import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const TodayGame: React.SFC = () => {
  const gamesList = useSelector((state: any) => state.gamesList);
  const [todayGameId, setTodayGameId] = useState({});

  useEffect(() => {
    // Games.getTodayGameId();
    //   .then((result: any) => {
    //   setTodayGameId(result);
    // });
    // console.log(Games.getTodayGameId());
    // const todayGame =
    //   gamesList &&
    //   gamesList.filter((game: any) => {
    //     game.name === "Oni";
    //   });
    // console.log(todayGame);
    // setTodayGameId(todayGame);
  }, []);
  return (
    <div>
      {/* Today was released <Link to={todayGameId}></Link>. Try it! */}
    </div>
  );
};

export default TodayGame;
