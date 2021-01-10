import React from "react";
import { filterByLetter } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { alphabetEn } from "../../constants/alphabet";

const AlphabetSorter: React.FC = () => {
  const activeLetter = useSelector(
    (state: ApplicationState) => state.gamesList.activeLetter
  );

  // TODO React.ChangeEvent<HTMLButtonElement> - event type issue
  const handleClickLetter = (event: any) => {
    const letter = event.target.getAttribute("data-letter");
    store.dispatch(filterByLetter(letter));
  };

  return (
    <ul className="alphabet-sorter">
      {alphabetEn.map((letter: string) => (
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
