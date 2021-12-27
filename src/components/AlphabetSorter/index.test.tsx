import React from "react";
import ReactDOM from "react-dom";
import * as redux from "react-redux";
import AlphabetSorter from "./index";

const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({
  gameslist: {
    activeLetter: "",
  },
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AlphabetSorter />, div);
});
