import React from "react";
// import { BingoType } from "../../types/Bingo";
import { bingo } from "../../constants/bingo";
import "./style.scss";

const Bingo = (beatemupBingo: any) => {
  const toggleActiveClass = (parameter: Boolean) =>
    parameter === true ? "bingo__name is-active" : "bingo__name";

  const renderBingoTable = () =>
    bingo.map((bingoItem: { id: string; name: string; detail: string }) => {
      const { id, detail, name } = bingoItem;
      // FIXME Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'BingoType'
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
    });

  return <div className="bingo">{renderBingoTable()}</div>;
};

export default Bingo;
