import React, { useState } from "react";
import { filterByLetter } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

const AlphabetSorter: React.SFC = () => {
  const [activeLetter, setActiveLetter] = useState("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const handleClickLetter = (event: any) => {
    const letter = event.target.getAttribute("data-letter");
    store.dispatch(filterByLetter(letter));
    setActiveLetter(letter);
  };

  return (
    <ul className="alphabet-sorter">
      {alphabet.map((letter: string) => (
        <li key={letter}>
          {activeLetter === letter ? (
            <span className="alphabet-sorter__button is-active">
              {letter.toUpperCase()}
            </span>
          ) : (
            <button
              onClick={handleClickLetter}
              data-letter={letter}
              className="alphabet-sorter__button"
            >
              {letter.toUpperCase()}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AlphabetSorter;
