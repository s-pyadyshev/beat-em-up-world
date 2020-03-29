import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {
  Link,
  useParams
} from "react-router-dom";
import Slider from "../Slider";
import "./style.scss";

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
    links,
    images,
    videos
  } = gameCardInfo;

  return (
    <div className="game-card">
      <h2 className="game-card__name">{name}</h2>
      <h3>{platform}</h3>
      <img src={cover} alt={name}/>
      <div>
        <span className="game-card__about">about: </span>
        <p>{about}</p>
      </div>
      <div>
        <span className="game-card__trivia">trivia: </span>
        <p>{trivia}</p>
      </div>

      <ul className="game-card__detail">
        <li>
          <span className="game-card__parameter-name">Developer: </span><span>{developer}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Publisher: </span><span>{publisher}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Release Date: </span><span>{releasedate}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Other Platforms: </span><ul className="game-card__other-platforms">{otherPlatforms && otherPlatforms.map((platform, index) => (
            <li key={index}>
              <Link to={name.replace(/\s/g,'').toLowerCase() + "[" + platform.replace(/\s/g,'').toLowerCase() + "]" } key={index}>
                <span>{platform}</span>
              </Link>
            </li>
          ))}</ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Series: </span><span>{series}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Players: </span><span>{players}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Structure: </span><span>{structure}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Difficulty: </span><span>{difficulty}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Gang Size: </span><span>{gangsize}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Variety: </span>
          <ul>{variety && variety.map((variety, index) => <li key={index}>{variety}</li>)}</ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Playtime: </span><span>{playtime}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Buttons: </span><span>{buttons}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Combos: </span><span>{combos}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Grabs: </span><span>{grabs}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Dashing: </span><span>{dashing}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Enemy Health Bars: </span><span>{enemyHBars}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Item Pickup: </span><span>{itemPickup}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Item Stay: </span><span>{itemStay}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Weapons Stay: </span><span>{weaponsStay}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Death Blow: </span><span>{deathBlow}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Friendly Fire: </span><span>{friendlyFire}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Character Switch: </span><span>{charSwitch}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Ground Hit: </span><span>{groundHit}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Revive: </span><span>{revive}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Restore: </span><span>{restore}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Art Style: </span><span>{artStyle}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Sprites: </span><span>{sprites}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Setting: </span><span>{setting}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Focus: </span><span>{focus}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Music: </span><span>{music}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Tone: </span><span>{tone}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Fighters: </span><span>{fighters}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Stages: </span><span>{stages}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Enemies: </span><span>{enemies}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Bosses: </span><span>{bosses}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Weapons: </span>
          <ul>{weapons && weapons.map((weapon, index) => <li key={index}>{weapon}</li>)}</ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Lives: </span><span>{lives}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Continues: </span><span>{continues}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Extend: </span><span>{extend}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Overall Review: </span><p>{overallReview}</p>
        </li>
        <li>
          <span className="game-card__parameter-name">Links: </span>
          <ul>{links && links.map((link, index) => <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>)}</ul>
        </li>
        <li className="game-card__screenshots">
          {images
            ? <Slider>
                {images.map((image, index) => <div key={index}><img src={image} alt="game screenshot"/></div>)}
              </Slider>
            : null}
        </li>
        <li className="game-card__videos">
          {videos
            ? <Slider>
                {videos.map((video, index) => (
                  <div key={index}>
                    <iframe title={index} width='100%' height='360' src={video} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                  </div>))}
              </Slider>
            : null}
        </li>
      </ul>
    </div>
  );
}

export default GameCard;