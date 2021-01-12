import React, { useContext } from "react";
import { GameContext } from "../components/GameContext";

const useTimeDifference = () => {
  const { setNumCookies, numCookies, numOfGeneratedCookies } = useContext(GameContext);

  window.addEventListener('unload', (ev) => {
    let exitTime = JSON.stringify(Math.floor(Date.now() / 1000));
    localStorage.setItem('exitedWindow', exitTime)
  });

  window.addEventListener('load', (ev) => {
    let loadTime = JSON.stringify(Math.floor(Date.now() / 1000));
    let timeClosed = localStorage.getItem('exitedWindow');
    let timeAway = loadTime - timeClosed;
    let accumulatedCookies = timeAway * numOfGeneratedCookies;
    setNumCookies(numCookies + accumulatedCookies);
  });
};
export default useTimeDifference;
