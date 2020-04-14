import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Bingo from "../Bingo";
import { Slider } from "../Slider";
import Tooltip from "../Tooltip";
import "./style.scss";

const GameCard = () => {
  const { id } = useParams();
  const [gameCardInfo, setGameCardInfo] = useState({});
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);

  useEffect(() => {
    const filteredGameCard = gamesList
      ? gamesList.filter(
          (game: any) =>
            `${game.name}[${game.platform}]`
              .replace(/\s/g, "")
              .toLowerCase() === id
        )[0]
      : null;
    setGameCardInfo({ ...filteredGameCard });
  }, [id, gamesList]);

  const {
    name,
    platform,
    about,
    trivia,
    developer,
    publisher,
    releaseYear,
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
    gore,
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
    videos,
    beatemupBingo,
  }: any = gameCardInfo;

  const bingoScoreTotal = beatemupBingo
    ? Object.keys(beatemupBingo).length
    : null;

  const bingoScore =
    beatemupBingo &&
    Object.values(beatemupBingo).filter((value) => value === true).length;
  // eslint-disable-next-line no-restricted-globals
  return (
    <div className="game-card">
      <h2 className="game-card__name">{name}</h2>
      <h3>{platform}</h3>
      <img src={cover} alt={name} />
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
          <span className="game-card__parameter-name">Developer: </span>
          <span>{developer}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Publisher: </span>
          <span>{publisher}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Release Year: </span>
          <span>{releaseYear}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Other Platforms: </span>
          <ul className="game-card__values-list">
            {otherPlatforms &&
              otherPlatforms.map((platformName: any, index: any) => (
                <li key={index}>
                  <Link
                    to={`${name
                      .replace(/\s/g, "")
                      .toLowerCase()}[${platformName
                      .replace(/\s/g, "")
                      .toLowerCase()}]`}
                  >
                    <span>{platformName}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Series: </span>
          <span>{series}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Players: </span>
          <span>{players}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Structure: </span>
          <span>{structure}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Difficulty: </span>
          <span>{difficulty}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Gang Size: </span>
          <span>{gangsize}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Variety: </span>
          <ul className="game-card__values-list">
            {variety &&
              variety.map((varietyName: any, index: any) => (
                <li key={index}>{varietyName}</li>
              ))}
          </ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Playtime: </span>
          <span>{playtime}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Buttons: </span>
          <span>{buttons}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Combos: </span>
          <span>{combos}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Grabs: </span>
          <span>{grabs}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Dashing: </span>
          <span>{dashing}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Enemy Health Bars: </span>
          <span>{enemyHBars}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Item Pickup: </span>
          <span>{itemPickup}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Item Stay: </span>
          <span>{itemStay}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Weapons Stay: </span>
          <span>{weaponsStay}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Death Blow: </span>
          <span>{deathBlow}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Friendly Fire: </span>
          <span>{friendlyFire}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Character Switch: </span>
          <span>{charSwitch}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Ground Hit: </span>
          <span>{groundHit}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Revive: </span>
          <span>{revive}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Restore: </span>
          <span>{restore}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Art Style: </span>
          <span>{artStyle}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Sprites: </span>
          <span>{sprites}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Setting: </span>
          <span>{setting}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Focus: </span>
          <span>{focus}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Music: </span>
          <span>{music}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Tone: </span>
          <span>{tone}</span>
        </li>
        {gore ? (
          <li>
            <span className="game-card__parameter-name">Gore: </span>
            <ul className="game-card__values-list">
              {gore.map((item: any, index: any) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ) : null}
        <li>
          <span className="game-card__parameter-name">Fighters: </span>
          <span>{fighters}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Stages: </span>
          <span>{stages}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Enemies: </span>
          <span>{enemies}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Bosses: </span>
          <span>{bosses}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Weapons: </span>
          <ul className="game-card__values-list">
            {weapons &&
              weapons.map((weapon: any, index: any) => (
                <li key={index}>{weapon}</li>
              ))}
          </ul>
        </li>
        <li>
          <span className="game-card__parameter-name">Lives: </span>
          <span>{lives}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Continues: </span>
          <span>{continues}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">Extend: </span>
          <span>{extend}</span>
        </li>
        <li>
          <span className="game-card__parameter-name">
            Beat&apos;em Up Bingo:{" "}
          </span>
          <span>
            {bingoScore} of {bingoScoreTotal}
            <Tooltip placement="bottom" tooltip={<Bingo {...beatemupBingo} />}>
              <span className="select__icon-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <circle cx="256" cy="378.5" r="25" />
                  <path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z" />
                  <path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z" />
                </svg>
              </span>
            </Tooltip>
          </span>
        </li>
        <li>
          <span className="game-card__parameter-name">Overall Review: </span>
          <p>{overallReview}</p>
        </li>
        <li>
          <span className="game-card__parameter-name">Links: </span>
          <ul>
            {links &&
              links.map((link: string, index: any) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
          </ul>
        </li>
        <li className="game-card__screenshots">
          {images ? (
            <Slider>
              {images.map((image: any, index: any) => (
                <div key={index}>
                  <img src={image} alt="game screenshot" />
                </div>
              ))}
            </Slider>
          ) : null}
        </li>
        <li className="game-card__videos">
          {videos ? (
            <Slider>
              {videos.map((video: any, index: any) => (
                <div key={index}>
                  {/* iframes must have unique title */}
                  <iframe
                    title={video}
                    width="100%"
                    height="360"
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </Slider>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default GameCard;
