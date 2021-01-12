import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import cursorSource from "../cursor.png";
import { GameContext } from "./GameContext";

const Cursor = () => {
  const urlCursor = `url("https://findicons.com/files/icons/2776/android_icons/96/ic_cursor_off.png"),auto`;
  const {
    setMegaClick,
    megaClick,
    numCookies,
    setNumCookies,
    cookieToggle,
    setCookieToggle,
    cursorPrice,
    setCursorPrice,
  } = useContext(GameContext);

  const useMegaClick = () => {
    setMegaClick(true);

    if (numCookies >= cursorPrice.cost) {
      setNumCookies(numCookies - cursorPrice.cost);
      if (cookieToggle) {
        let cValue = cursorPrice.value;
        let cCost = cursorPrice.cost;
        let newPrice = {
          cost: cCost + Math.round(cCost / 5),
          value: cValue + Math.round(cValue / 2),
        };
        setCursorPrice(newPrice);
      }

      document.getElementById("Wrapper").style.cursor = `${urlCursor}`;
      document.getElementById("GameArea").style.cursor = `${urlCursor}`;
      document.getElementById("CookieButton").style.cursor = `${urlCursor}`;
    } else {
      window.alert("Not Enough Cookies To Purchase!");
    }

    return cursorPrice;
  };

  return (
    <Button onClick={useMegaClick} megaClick={megaClick}>
      <Title>Mega Cursor</Title>
      <Description>
        Cost {cursorPrice.cost} cookies, Gives {cursorPrice.value} cookies per
        click!
      </Description>
      <CursorImg src={cursorSource} />
    </Button>
  );
};

const Button = styled.button`
  margin: 100px;
  border: 5px solid white;
  background-color: #222;
  color: white;
  text-align: center;
  border-radius: 100%;
  height: 200px;
  width: 200px;
  padding: 10px;
  cursor: url("https://findicons.com/files/icons/2776/android_icons/96/ic_cursor_off.png"),
    auto;
  &:hover {
    cursor: url("https://findicons.com/files/icons/2776/android_icons/96/ic_cursor_off.png"),
      auto;
  }
`;
const Title = styled.h2``;
const CursorImg = styled.img`
  width: 50px;
  height: 50px;
`;
const Description = styled.p``;
export default Cursor;
