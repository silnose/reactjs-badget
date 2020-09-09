// OLD WAY VAINILLA JS
/* const element = document.createElement("h1"); // Create element on HTML
element.innerHTML = "Hello Sil"; // Adding text to an element

const container = document.getElementById("app"); // where put that element
container.appendChild(element); // boom!
 */

import React from "react"; //createElement
import ReactDOM from "react-dom"; //appendChild

const element = <h1>Hello Sil</h1>;
const container = document.getElementById("app");

//ReactDOM.render(__what__, ___where__)
ReactDOM.render(element, container);
