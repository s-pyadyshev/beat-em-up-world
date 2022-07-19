import React from "react";
// import { BingoInterface } from "../../interfaces/Bingo";
import { bingo } from "../../constants/bingo";
import "./style.scss";

const Bingo = (beatemupBingo: any) => {
  const toggleActiveClass = (parameter: Boolean) =>
    parameter === true ? "bingo__name is-active" : "bingo__name";

  return (
    <div className="bingo">
      {bingo.map((bingoItem) => {
        const { id, detail, name } = bingoItem;
        const beatemupBingoId = beatemupBingo[id];
        return (
          <div
            key={id}
            className={toggleActiveClass(beatemupBingoId)}
            title={detail}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Bingo;
