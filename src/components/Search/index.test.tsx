import React from "react";
import ReactDOM from "react-dom";
import Search from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search />, div);
});

// it("Search typing works", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Search />, div);
// });
