import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useInterval from "../hooks/use-interval.hook";
import GlobalStyles from "./GlobalStyles";
import { GameContext } from "./GameContext";
import Home from "./Home";
import Game from "./Game";
import useTimeDifference from "../hooks/useTimeDifference";

function App(props) {
  const { numCookies, setNumCookies, numOfGeneratedCookies } = useContext(
    GameContext
  );

  useInterval(() => {
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  useTimeDifference();

  return (
    <>
      <GlobalStyles />

      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
