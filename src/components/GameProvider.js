import React, { useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import usePersistedState from "./usePersistedState";
import useAppTitle from "./useAppTitle";
import { items } from "./Data";
import calculateCookiesPerSecond from "./CalculateCookiesPerSecond";

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = useState(
    usePersistedState(1000, "CookieCount")
  );

  useEffect(() => {
    localStorage.setItem("CookieCount", numCookies);
  }, [numCookies]);

  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  useAppTitle(numCookies, `Cookie Clicker Workshop`);
  const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);

console.log(numOfGeneratedCookies);

  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        calculateCookiesPerSecond,
        numOfGeneratedCookies,
        purchasedItems,
        setPurchasedItems,
        items,
        useAppTitle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
