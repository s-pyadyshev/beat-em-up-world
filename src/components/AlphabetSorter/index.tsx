import React from "react";
import { filterByLetter, filterByValue } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { alphabet } from "../../constants/alphabet";

const handleMissingGamesClick = () => {
  store.dispatch(filterByValue("missing"));
};

// TODO React.ChangeEvent<HTMLButtonElement> - event type issue
const handleClickLetter = (event: React.MouseEvent<HTMLButtonElement>) => {
  const letter = event.currentTarget.getAttribute("data-letter") as string;
  store.dispatch(filterByLetter(letter));
};

const AlphabetSorter: React.FC = () => {
  const activeLetter = useSelector(
    (state: ApplicationState) => state.gamesList.activeLetter
  );

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
      <li>
        <button
          onClick={handleMissingGamesClick}
          className="alphabet-sorter__button"
          style={{ color: "#f00" }}
        >
          missing
        </button>
      </li>
    </ul>
  );
};

export default AlphabetSorter;
