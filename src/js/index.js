//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// Función Render con incremento
let num = 0;
setInterval(function() {

            ReactDOM.render( < Home seconds = {
                    num
                }
                / > , document.querySelector("#app"))
                num++;
            }, 1000);