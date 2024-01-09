import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bingo from "../Bingo";
import { Slider } from "../Slider";
import Tooltip from "../Tooltip";
import Comments from "../Comments";
import {
  convertGameId,
  makeOtherPlatformLink,
  makeOtherPlatformName,
} from "../../utils/utils";
import { IApplicationState } from "../../interfaces/ApplicationState";
import { GameCardType } from "../../types/GameCard";
import "./style.scss";
import { SwiperSlide } from "swiper/react";
import store from "../../store";
import { toggleFilter } from "../../store/filters/actions";

const GameCard = ({ id, commentsUrl, commentsId }: any) => {
  const [gameCardInfo, setGameCardInfo] = useState({});
  const gamesList = useSelector(
    (state: IApplicationState) => state.gamesList.gamesList
  );

  const neutralValues = ["N/A"];
  const negativeValues = ["No"];

  const applyValueClass = (value: any) => {
    if (neutralValues.includes(value)) {
      return "state-muted-color";
    }
    if (negativeValues.includes(value)) {
      return "state-error-color";
    }
  };

  useEffect(() => {
    store.dispatch(toggleFilter(false));
  }, []);

  useEffect(() => {
    // TODO make backend instead of this bad way to find game by id
    const filteredGameCard = gamesList
      ? gamesList.filter(
          (game: GameCardType) => convertGameId(game.name, game.platform) === id
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

  // eslint-disable-next-line no-restricted-globals
  return (
    <div className="game-card">
      <Link to="/" className="game-card__back">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 401.949 401.949"
          >
            <path
              d="M401.947 159.301c0-8.583-6.949-15.742-15.497-15.889H197.515c-7.021-1.589-12.309-7.886-12.309-15.369V78.976c0-8.675-5.397-11.163-11.993-5.535L4.948 190.735c-6.598 5.634-6.598 14.847 0 20.479l168.262 117.29c6.599 5.632 11.996 3.146 11.996-5.528v-49.067c0-8.673 7.097-15.771 15.771-15.771l185.201-.276c8.676-.004 15.771-7.101 15.771-15.771l-.002-82.79z"
              fill="#f0f"
            />
          </svg>{" "}
          Back to Games list
        </span>
      </Link>
      <h2 className="game-card__name">
        {name} [{platform}]
      </h2>
      <div className="game-card__body">
        <div className="game-card__left">
          <div className="game-card__header">
            <div className="game-card__about">
              <div>
                <span className="game-card__title">About</span>
                <p>{about ? about : "Coming soon"}</p>
              </div>
              <div>
                <span className="game-card__title">Trivia</span>
                <p>{trivia ? trivia : "Coming soon"}</p>
              </div>
            </div>
          </div>
          <div className="game-card__reviews">
            <span className="game-card__title">Overall Review</span>
            {overallReview && overallReview.length ? (
              overallReview.map(
                (item: { name: string; author: string; text: string }) => (
                  <div key={item.name}>
                    <h4 className="game-card__author">
                      By <span>{item.author}</span>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                )
              )
            ) : (
              <p>Coming soon</p>
            )}
          </div>
          <div className="game-card__links">
            <span className="game-card__title">Links: </span>
            {links && links.length ? (
              <ul className="game-card__links">
                {links.map((link: string) => (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Coming soon</p>
            )}
          </div>

          <div>
            {images ? (
              <div className="game-card__screenshots">
                <Slider>
                  {images.map((image: string) => (
                    <SwiperSlide key={image}>
                      <img src={image} alt="game screenshot" />
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            ) : null}
            {videos && videos.length > 0 ? (
              <div className="game-card__videos">
                <Slider>
                  {videos.map((video: string) => (
                    <SwiperSlide key={video}>
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
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            ) : null}
          </div>
        </div>
        <div className="game-card__right">
          <div className="game-card__cover-wrap">
            <img src={cover} alt={name} className="game-card__cover" />
          </div>
          <ul className="game-card__detail">
            {/* TODO Refactor conditions for null values */}
            <li className="game-card__section-title">
              <span>Release Info</span>
            </li>
            <li>
              <span className="game-card__parameter-name">Platform:</span>
              <span>{platform}</span>
            </li>
            <li>
              <span className="game-card__parameter-name">Perspective:</span>
              <span>{perspective}</span>
            </li>
            <li>
              <span className="game-card__parameter-name">Country:</span>
              <span>
                {country ? (
                  country
                ) : (
                  <span className="state-muted-color">unknown</span>
                )}
              </span>
            </li>
            <li>
              <span className="game-card__parameter-name">Developer:</span>
              <span>
                {developer ? (
                  developer
                ) : (
                  <span className="state-muted-color">unknown</span>
                )}
              </span>
            </li>
            <li>
              <span className="game-card__parameter-name">Publisher:</span>
              <span>{publisher}</span>
            </li>
            <li>
              <span className="game-card__parameter-name">Release Date:</span>
              <span>
                {releasedate !== "unknown" ? (
                  releasedate
                ) : (
                  <span className="state-muted-color">unknown</span>
                )}
              </span>
            </li>
            <li>
              <span className="game-card__parameter-name">Release Year:</span>
              <span>{releaseYear}</span>
            </li>
            {otherPlatforms ? (
              <li>
                <span className="game-card__parameter-name">
                  Other Platforms:{" "}
                </span>
                <ul className="game-card__values-list">
                  {otherPlatforms &&
                    otherPlatforms.map((game: string, index: number) => {
                      const id = game + index;

                      return (
                        <li key={id}>
                          <Link
                            to={`/games/${makeOtherPlatformLink(name, game)}`}
                          >
                            <span>{makeOtherPlatformName(game)}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            ) : null}
            {series ? (
              <li>
                <span className="game-card__parameter-name">Series:</span>
                <span>{series}</span>
              </li>
            ) : null}
            <li className="game-card__section-title">Game</li>
            <li>
              <span className="game-card__parameter-name">Players:</span>
              <span>{players}</span>
            </li>
            {structure ? (
              <li>
                <span className="game-card__parameter-name">Structure:</span>
                <span>{structure}</span>
              </li>
            ) : null}
            {difficulty ? (
              <li>
                <span className="game-card__parameter-name">Difficulty:</span>
                <span>{difficulty}</span>
              </li>
            ) : null}
            {gangsize ? (
              <li>
                <span className="game-card__parameter-name">Gang Size:</span>
                <span>{gangsize}</span>
              </li>
            ) : null}
            <li>
              <span className="game-card__parameter-name">Variety:</span>
              <ul className="game-card__values-list">
                {variety &&
                  variety.map((varietyName: string) => (
                    <li key={varietyName}>
                      <span>{varietyName}</span>
                    </li>
                  ))}
              </ul>
            </li>
            {gangsize ? (
              <li>
                <span className="game-card__parameter-name">Playtime:</span>
                <span>
                  {playtime ? (
                    playtime
                  ) : (
                    <span className="state-muted-color">unknown</span>
                  )}
                </span>
              </li>
            ) : null}
            <li className="game-card__section-title">Combat</li>
            {buttons ? (
              <li>
                <span className="game-card__parameter-name">Buttons:</span>
                <span>{buttons}</span>
              </li>
            ) : null}
            {combos ? (
              <li>
                <span className="game-card__parameter-name">Combos:</span>
                <span>{combos}</span>
              </li>
            ) : null}
            <li>
              <span className="game-card__parameter-name">Grabs:</span>
              <span className={applyValueClass(grabs) ? "danger" : "success"}>
                {grabs}
              </span>
            </li>
            <li>
              <span className="game-card__parameter-name">Dashing:</span>
              <span className={applyValueClass(dashing) ? "danger" : "success"}>
                {dashing}
              </span>
            </li>
            {enemyHBars ? (
              <li>
                <span className="game-card__parameter-name">
                  Enemy Health Bars:{" "}
                </span>
                <span>{enemyHBars}</span>
              </li>
            ) : null}
            {itemPickup ? (
              <li>
                <span className="game-card__parameter-name">Item Pickup:</span>
                <span>{itemPickup}</span>
              </li>
            ) : null}
            {itemStay ? (
              <li>
                <span className="game-card__parameter-name">Item Stay:</span>
                <span>{itemStay}</span>
              </li>
            ) : null}
            {weaponsStay ? (
              <li>
                <span className="game-card__parameter-name">
                  Weapons Stay:{" "}
                </span>
                <span className={applyValueClass(weaponsStay)}>
                  {weaponsStay}
                </span>
              </li>
            ) : null}
            {deathBlow ? (
              <li>
                <span className="game-card__parameter-name">Death Blow:</span>
                <span className={applyValueClass(deathBlow)}>{deathBlow}</span>
              </li>
            ) : null}
            {friendlyFire ? (
              <li>
                <span className="game-card__parameter-name">
                  Friendly Fire:{" "}
                </span>
                <span>{friendlyFire}</span>
              </li>
            ) : null}
            {charSwitch ? (
              <li>
                <span className="game-card__parameter-name">
                  Character Switch:
                </span>
                <span className={applyValueClass(charSwitch)}>
                  {charSwitch}
                </span>
              </li>
            ) : null}
            <li>
              <span className="game-card__parameter-name">Ground Hit:</span>
              <span
                className={applyValueClass(groundHit) ? "danger" : "success"}
              >
                {groundHit}
              </span>
            </li>
            {revive ? (
              <li>
                <span className="game-card__parameter-name">Revive:</span>
                <span>{revive}</span>
              </li>
            ) : null}
            {restore ? (
              <li>
                <span className="game-card__parameter-name">Restore:</span>
                <span>{restore}</span>
              </li>
            ) : null}
            <li className="game-card__section-title">Style</li>
            {artStyle ? (
              <li>
                <span className="game-card__parameter-name">Art Style:</span>
                <span>{artStyle}</span>
              </li>
            ) : null}
            {sprites ? (
              <li>
                <span className="game-card__parameter-name">Sprites:</span>
                <span>{sprites}</span>
              </li>
            ) : null}
            <li>
              <span className="game-card__parameter-name">Setting:</span>
              <span>{setting}</span>
            </li>
            <li>
              <span className="game-card__parameter-name">Focus:</span>
              <span>{focus}</span>
            </li>
            {music ? (
              <li>
                <span className="game-card__parameter-name">Music:</span>
                <ul className="game-card__values-list">
                  {music.map((item: string) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ) : null}
            {tone ? (
              <li>
                <span className="game-card__parameter-name">Tone:</span>
                <span>{tone}</span>
              </li>
            ) : null}
            {gore && gore[0] !== null ? (
              <li>
                <span className="game-card__parameter-name">Gore:</span>
                <ul className="game-card__values-list">
                  {gore.map((item: string) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ) : null}
            <li className="game-card__section-title">Numbers</li>
            {fighters ? (
              <li>
                <span className="game-card__parameter-name">Fighters:</span>
                <span>{fighters}</span>
              </li>
            ) : null}
            {stages ? (
              <li>
                <span className="game-card__parameter-name">Stages:</span>
                <span>{stages}</span>
              </li>
            ) : null}
            {enemies ? (
              <li>
                <span className="game-card__parameter-name">Enemies:</span>
                <span>{enemies}</span>
              </li>
            ) : null}
            {bosses ? (
              <li>
                <span className="game-card__parameter-name">Bosses:</span>
                <span>{bosses}</span>
              </li>
            ) : null}
            {weapons && weapons[0] !== null ? (
              <li>
                <span className="game-card__parameter-name">Weapons:</span>
                <ul className="game-card__values-list">
                  {weapons &&
                    weapons.map((weapon: string) => (
                      <li key={weapon}>
                        <span>{weapon}</span>
                      </li>
                    ))}
                </ul>
              </li>
            ) : null}
            <li>
              <span className="game-card__parameter-name">
                Beat&apos;em Up Bingo:
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
      </div>
      <div className="game-card__comments">
        <Comments fullUrl={commentsUrl} id={commentsId} />
      </div>
    </div>
  );
};

export default GameCard;
