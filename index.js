//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("h1", null, "hello"),
    " ",
    /*#__PURE__*/ React.createElement(
      "ul",
      null,
      /*#__PURE__*/ React.createElement("li", null, "I"),
      /*#__PURE__*/ React.createElement("li", null, "AM"),
      /*#__PURE__*/ React.createElement("li", null, "VIKASH")
    )
  ),
  document.getElementById("root")
);
