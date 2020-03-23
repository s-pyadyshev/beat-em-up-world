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
          <span>Developer: {developer}</span>
        </li>
        <li>
          <span>Publisher: {publisher}</span>
        </li>
        <li>
          <span>Release Date: </span><span>{releasedate}</span>
        </li>
        <li>
          <span>Other Platforms: </span><span>{otherPlatforms}</span>
        </li>
        <li>
          <span>Series: </span><span>{series}</span>
        </li>
        <li>
          <span>Players: </span><span>{players}</span>
        </li>
        <li>
          <span>Structure: </span><span>{structure}</span>
        </li>
        <li>
          <span>Difficulty: </span><span>{difficulty}</span>
        </li>
        <li>
          <span>Gang Size: </span><span>{gangsize}</span>
        </li>
        <li>
          <span>Variety: </span>
          <ul>{variety && variety.map((variety, index) => <li key={index}>{variety}</li>)}</ul>
        </li>
        <li>
          <span>Playtime: </span><span>{playtime}</span>
        </li>
        <li>
          <span>Buttons: </span><span>{buttons}</span>
        </li>
        <li>
          <span>Combos: </span><span>{combos}</span>
        </li>
        <li>
          <span>Grabs: </span><span>{grabs}</span>
        </li>
        <li>
          <span>Dashing: </span><span>{dashing}</span>
        </li>
        <li>
          <span>Enemy Health Bars: </span><span>{enemyHBars}</span>
        </li>
        <li>
          <span>Item Pickup: </span><span>{itemPickup}</span>
        </li>
        <li>
          <span>Item Stay: </span><span>{itemStay}</span>
        </li>
        <li>
          <span>Weapons Stay: </span><span>{weaponsStay}</span>
        </li>
        <li>
          <span>Death Blow: </span><span>{deathBlow}</span>
        </li>
        <li>
          <span>Friendly Fire: </span><span>{friendlyFire}</span>
        </li>
        <li>
          <span>Character Switch: </span><span>{charSwitch}</span>
        </li>
        <li>
          <span>Ground Hit: </span><span>{groundHit}</span>
        </li>
        <li>
          <span>Revive: </span><span>{revive}</span>
        </li>
        <li>
          <span>Restore: </span><span>{restore}</span>
        </li>
        <li>
          <span>Art Style: </span><span>{artStyle}</span>
        </li>
        <li>
          <span>Sprites: </span><span>{sprites}</span>
        </li>
        <li>
          <span>Setting: </span><span>{setting}</span>
        </li>
        <li>
          <span>Focus: </span><span>{focus}</span>
        </li>
        <li>
          <span>Music: </span><span>{music}</span>
        </li>
        <li>
          <span>Tone: </span><span>{tone}</span>
        </li>
        <li>
          <span>Fighters: </span><span>{fighters}</span>
        </li>
        <li>
          <span>Stages: </span><span>{stages}</span>
        </li>
        <li>
          <span>Enemies: </span><span>{enemies}</span>
        </li>
        <li>
          <span>Bosses: </span><span>{bosses}</span>
        </li>
        <li>
          <span>Weapons: </span>
          <ul>{weapons && weapons.map((weapon, index) => <li key={index}>{weapon}</li>)}</ul>
        </li>
        <li>
          <span>Lives: </span><span>{lives}</span>
        </li>
        <li>
          <span>Continues: </span><span>{continues}</span>
        </li>
        <li>
          <span>Extend: </span><span>{extend}</span>
        </li>
        <li>
          <span>Overall Review: </span><span>{overallReview}</span>
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