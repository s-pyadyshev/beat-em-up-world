import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {
  useParams
} from "react-router-dom";

const GameCard = () => {
  let { id } = useParams();
  let [gameCardInfo, setGameCardInfo] = useState({});
  const gamesList = useSelector(state => state.gamesList.gamesList);

  useEffect(() => {
      const filteredGameCard = gamesList
        ? gamesList.filter((game) => (game.name + "[" + game.platform + "]").replace(/\s/g,'').toLowerCase() === id)[0]
        : null;
      setGameCardInfo({...filteredGameCard});
  }, [id, gamesList]);

  const {
    name,
    platform,
    about,
    trivia,
    developer,
    publisher,
    releasedate,
    otherPlatforms,
    series,
    players,
    structure,
    difficulty,
    gangsize,
    variety,
    playtime,
    buttons,
    combos,
    grabs,
    dashing,
    enemyHBars,
    itemPickup,
    itemStay,
    weaponsStay,
    deathBlow,
    friendlyFire,
    charSwitch,
    groundHit,
    revive,
    restore,
    artStyle,
    sprites,
    setting,
    focus,
    music,
    tone,
    fighters,
    stages,
    enemies,
    bosses,
    weapons,
    lives,
    continues,
    extend,
    overallReview,
    cover,
    images
  } = gameCardInfo;



  return (
    <div>
      <h2>{name}</h2>
      <div>{platform}</div>
      <img src={cover} alt={name}/>
      <p>about: {about}</p>
      <p>trivia: {trivia}</p>

      <ul>
        <li>
          <span>developer: {developer}</span>
        </li>
        <li>
          <span>publisher: {publisher}</span>
        </li>
        <li>
          <span>releasedate: </span><span>{releasedate}</span>
        </li>
        <li>
          <span>otherPlatforms: </span><span>{otherPlatforms}</span>
        </li>
        <li>
          <span>series: </span><span>{series}</span>
        </li>
        <li>
          <span>players: </span><span>{players}</span>
        </li>
        <li>
          <span>structure: </span><span>{structure}</span>
        </li>
        <li>
          <span>difficulty: </span><span>{difficulty}</span>
        </li>
        <li>
          <span>gangsize: </span><span>{gangsize}</span>
        </li>
        <li>
          <span>variety: </span><span>{variety}</span>
        </li>
        <li>
          <span>playtime: </span><span>{playtime}</span>
        </li>
        <li>
          <span>buttons: </span><span>{buttons}</span>
        </li>
        <li>
          <span>combos: </span><span>{combos}</span>
        </li>
        <li>
          <span>grabs: </span><span>{grabs}</span>
        </li>
        <li>
          <span>dashing: </span><span>{dashing}</span>
        </li>
        <li>
          <span>enemyHBars: </span><span>{enemyHBars}</span>
        </li>
        <li>
          <span>itemPickup: </span><span>{itemPickup}</span>
        </li>
        <li>
          <span>itemStay: </span><span>{itemStay}</span>
        </li>
        <li>
          <span>weaponsStay: </span><span>{weaponsStay}</span>
        </li>
        <li>
          <span>deathBlow: </span><span>{deathBlow}</span>
        </li>
        <li>
          <span>friendlyFire: </span><span>{friendlyFire}</span>
        </li>
        <li>
          <span>charSwitch: </span><span>{charSwitch}</span>
        </li>
        <li>
          <span>groundHit: </span><span>{groundHit}</span>
        </li>
        <li>
          <span>revive: </span><span>{revive}</span>
        </li>
        <li>
          <span>restore: </span><span>{restore}</span>
        </li>
        <li>
          <span>artStyle: </span><span>{artStyle}</span>
        </li>
        <li>
          <span>sprites: </span><span>{sprites}</span>
        </li>
        <li>
          <span>setting: </span><span>{setting}</span>
        </li>
        <li>
          <span>focus: </span><span>{focus}</span>
        </li>
        <li>
          <span>music: </span><span>{music}</span>
        </li>
        <li>
          <span>tone: </span><span>{tone}</span>
        </li>
        <li>
          <span>fighters: </span><span>{fighters}</span>
        </li>
        <li>
          <span>stages: </span><span>{stages}</span>
        </li>
        <li>
          <span>enemies: </span><span>{enemies}</span>
        </li>
        <li>
          <span>bosses: </span><span>{bosses}</span>
        </li>
        <li>
          <span>weapons: </span><span>{weapons}</span>
        </li>
        <li>
          <span>lives: </span><span>{lives}</span>
        </li>
        <li>
          <span>continues: </span><span>{continues}</span>
        </li>
        <li>
          <span>extend: </span><span>{extend}</span>
        </li>
        <li>
          <span>overallReview: </span><span>{overallReview}</span>
        </li>
        <li>
          <ul>
            {images ? images.map((image, index) => <li key={index}><img src={image} alt="game screenshot"/></li>) : null}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GameCard;