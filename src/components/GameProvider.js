import React, { useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import usePersistedState from "../hooks/usePersistedState";
import useAppTitle from "./useAppTitle";
import { items } from "./Data";
import calculateCookiesPerSecond from "./CalculateCookiesPerSecond";

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = usePersistedState(1000, "cookieClick");
  const [megaClick, setMegaClick] = useState(false);
  const [cookieToggle, setCookieToggle] = useState(false);
  const [cursorPrice, setCursorPrice] = useState({ cost: 1000, value: 5 });
  const [purchasedItems, setPurchasedItems] = usePersistedState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  }, "purchasedItem");

  useAppTitle(numCookies, `Cookie Clicker Workshop`);
  const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);

  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        calculateCookiesPerSecond,
        numOfGeneratedCookies,
        purchasedItems,
        setPurchasedItems,
        megaClick,
        setMegaClick,
        cookieToggle,
        setCookieToggle,
        cursorPrice,
        setCursorPrice,
        items,
        useAppTitle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
