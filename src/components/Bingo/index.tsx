import { BingoType } from "../../types/Bingo";
import { bingo } from "../../constants/bingo";
import "./style.scss";

type BingoItem = {
  id: string;
  name: string;
  detail: string;
};
// TODO optimize rerender
const Bingo = (beatemupBingo: BingoType) => {
  const renderBingoTable = () =>
    bingo.map((bingoItem: BingoItem) => {
      const { id, detail, name } = bingoItem;
      const isBingoItemActive = beatemupBingo[id as keyof BingoType];

      return (
        <div
          key={id}
          className={
            isBingoItemActive ? "bingo__name is-active" : "bingo__name"
          }
          title={detail}
        >
          {name}
        </div>
      );
    });

  return <div className="bingo">{renderBingoTable()}</div>;
};

export default Bingo;
