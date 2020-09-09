import React from "react";
import ReactDOM from "react-dom";
//Using ReactCreateElement
/* const element = React.createElement(
  "a",
  { href: "http://google.com" },
  "Hello I'm childen"
); */

// Using var
/* const name = "Sil";
const element = React.createElement("h1", {}, `Hola soy ${name}`);
const container = document.getElementById("app");
 */

// We can display any expresion func, var etc...
/* const name = "Seoeoo";
const sum = () => 3 + 3;
const element = <h1>Hola soy {sum()}</h1>;
const container = document.getElementById("app");
 */

// We can add also more complex blocks
/* const element = (
  <div>
    <h1>Hello I'm Silvana</h1>
    <p>I'm software developers</p>
  </div>
);
const container = document.getElementById("app");

ReactDOM.render(element, container); */

//If we try to follow the above example without JSX == CRAZY!

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello I'm Silvanaa"),
  React.createElement("p", {}, "I'm software developer")
);
const container = document.getElementById("app");

ReactDOM.render(element, container);
