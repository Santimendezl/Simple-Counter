//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// Función Render con incremento y decremento
let num = 0;
let num2 = 20;
setInterval(function() {
            ReactDOM.render( < Home seconds = {
                    num
                }
                regressive = {
                    num2
                }
                / > , document.querySelector("#app"))
                num++;
                if (num2 > 0) {
                    num2--;
                }

            }, 1000);