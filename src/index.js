import React from "react";
import ReactDOM from "react-dom";
import { GameProvider } from "../src/components/GameProvider";
import App from "./components/App";
import Game from "./components/Game";

const rootElement = document.getElementById("root");

ReactDOM.render(<GameProvider><App /></GameProvider>, rootElement);
