import React from "react";
import ReactDOM from "react-dom";

// type is h1, virtual DOM
const element = <h1>Hello World</h1>
console.log(element);

// link to public/index.html
ReactDOM.render(element, document.getElementById('root'));