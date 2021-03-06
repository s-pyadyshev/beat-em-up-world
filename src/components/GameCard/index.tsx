import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Bingo from "../Bingo";
import { Slider } from "../Slider";
import Tooltip from "../Tooltip";
import Comments from "../Comments";
import { convertGameId } from "../../utils/convertGameId";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const GameCard = ({ commentsUrl, commentsId }: any) => {
  const { id } = useParams();
  const [gameCardInfo, setGameCardInfo] = useState({});
  const gamesList = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList
  );

  const negativeValues = ["No"];
  const hasFeature = (value: string) => negativeValues.includes(value);

  useEffect(() => {
    const filteredGameCard = gamesList
      ? gamesList.filter(
          (game: GameCardInterface) =>
            convertGameId(game.name, game.platform) === id
        )[0]
      : null;
    setGameCardInfo({ ...filteredGameCard });
  }, [gamesList, id]);

  const {
    name,
    platform,
    perspective,
    country,
    about,
    trivia,
    developer,
    publisher,
    releasedate,
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

  const makeOtherPlatformLink = (name: string, game: any) => {
    return typeof game === "string"
      ? convertGameId(name, game)
      : convertGameId(game.name, game.platform);
  };

  const makeOtherPlatformName = (game: any) =>
    typeof game === "string" ? game : game.platform;

  // eslint-disable-next-line no-restricted-globals
  return (
    <div className="game-card">
      <Link to="/">
        <span>Back to Games list</span>
      </Link>
      <h2 className="game-card__name">
        {name} [{platform}]
      </h2>
      <div className="game-card__body">
        <div className="game-card__header">
          <div className="game-card__about">
            <div>
              <span className="game-card__title">about: </span>
              <p>{about}</p>
            </div>
            <div>
              <span className="game-card__title">trivia: </span>
              <p>{trivia}</p>
            </div>
          </div>
          <img src={cover} alt={name} className="game-card__cover" />
          <div>
            <span className="game-card__title">Overall Review: </span>
            <p>{overallReview}</p>
          </div>
          <div>
            <span className="game-card__title">Links: </span>
            <ul className="game-card__links">
              {links &&
                links.map((link: string) => (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <ul className="game-card__detail">
          <li>
            <span className="game-card__parameter-name">Platform: </span>
            <span>{platform}</span>
          </li>
          <li>
            <span className="game-card__parameter-name">Perspective: </span>
            <span>{perspective}</span>
          </li>
          <li>
            <span className="game-card__parameter-name">Country: </span>
            <span className={developer ? "" : "danger"}>
              {country ? country : "no info"}
            </span>
          </li>
          <li>
            <span className="game-card__parameter-name">Developer: </span>
            <span className={developer ? "" : "danger"}>
              {developer ? developer : "no info"}
            </span>
          </li>
          <li>
            <span className="game-card__parameter-name">Publisher: </span>
            <span>{publisher}</span>
          </li>
          <li>
            <span className="game-card__parameter-name">Release Date: </span>
            <span className={releasedate ? "" : "danger"}>
              {releasedate ? releasedate : "no info"}
            </span>
          </li>
          <li>
            <span className="game-card__parameter-name">Release Year: </span>
            <span>{releaseYear}</span>
          </li>
          {otherPlatforms ? (
            <li>
              <span className="game-card__parameter-name">
                Other Platforms:{" "}
              </span>
              <ul className="game-card__values-list">
                {otherPlatforms &&
                  otherPlatforms.map((game: any, index: number) => (
                    <li key={game + index}>
                      <Link to={makeOtherPlatformLink(name, game)}>
                        <span>{makeOtherPlatformName(game)}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ) : null}
          {series ? (
            <li>
              <span className="game-card__parameter-name">Series: </span>
              <span>{series}</span>
            </li>
          ) : null}
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
                variety.map((varietyName: string) => (
                  <li key={varietyName}>
                    <span>{varietyName}</span>
                  </li>
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
            <span className={hasFeature(grabs) ? "danger" : "success"}>
              {grabs}
            </span>
          </li>
          <li>
            <span className="game-card__parameter-name">Dashing: </span>
            <span className={hasFeature(dashing) ? "danger" : "success"}>
              {dashing}
            </span>
          </li>
          <li>
            <span className="game-card__parameter-name">
              Enemy Health Bars:{" "}
            </span>
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
            <span className="game-card__parameter-name">Character Switch:</span>
            <span>{charSwitch}</span>
          </li>
          <li>
            <span className="game-card__parameter-name">Ground Hit: </span>
            <span className={hasFeature(groundHit) ? "danger" : "success"}>
              {groundHit}
            </span>
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
          {music ? (
            <li>
              <span className="game-card__parameter-name">Music: </span>
              <ul className="game-card__values-list">
                {music.map((item: string) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ) : null}
          <li>
            <span className="game-card__parameter-name">Tone: </span>
            <span>{tone}</span>
          </li>
          {gore && gore[0] !== null ? (
            <li>
              <span className="game-card__parameter-name">Gore: </span>
              <ul className="game-card__values-list">
                {gore.map((item: string) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
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
                weapons.map((weapon: string) => (
                  <li key={weapon}>
                    <span>{weapon}</span>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            <span className="game-card__parameter-name">
              Beat&apos;em Up Bingo:{" "}
            </span>
            <span>
              {bingoScore} of {bingoScoreTotal}
              <Tooltip
                trigger="click"
                placement="bottom"
                tooltip={<Bingo {...beatemupBingo} />}
              >
                <span className="select__icon-info">
                  <svg>
                    <use xlinkHref="/images/sprite.svg#info" />
                  </svg>
                </span>
              </Tooltip>
            </span>
          </li>
        </ul>
      </div>

      {images ? (
        <div className="game-card__screenshots">
          <Slider>
            {images.map((image: string) => (
              <div key={image}>
                <img src={image} alt="game screenshot" />
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
      {videos && videos.length > 0 ? (
        <div className="game-card__videos">
          <Slider>
            {videos.map((video: string) => (
              <div key={video}>
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
        </div>
      ) : null}
      <div className="game-card__comments">
        <Comments fullUrl={commentsUrl} id={commentsId} />
      </div>
    </div>
  );
};

export default GameCard;
