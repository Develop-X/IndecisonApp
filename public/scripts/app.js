"use strict";

console.log("App.js is running!");

//JSX - JavaScript XML

var app = {
  title: "Indecison App",
  subtitle: "This is some info"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    " ",
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " Item One "
    ),
    React.createElement(
      "li",
      null,
      " Item Two "
    )
  )
);

var user = {
  name: "Dip",
  age: 27,
  location: "Newyork"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      P,
      null,
      "Location:",
      location
    );
  } else {
    return "Unknown";
  }
}
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name + "!"
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
