import React, { useEffect, useState, useContext } from "react";
import { GameContext } from "./GameContext";

const useTimeDifference = () => {
const [oldTime, setOldTime] = useState();
  const [newTime, setNewTime] = useState();

  const newTab = () => {
    const newTime = new Date();
    const newSeconds = Math.round(newTime.getTime()) / 1000;
    setNewTime(newSeconds);
    return newSeconds;
  };
  const useClosedTab =  () => {
    const newTime = new Date();
    const newSeconds = Math.round(newTime.getTime()) / 1000;
    setOldTime(newSeconds); 
    console.log(newSeconds)
     localStorage.setItem("closedTabTime", newSeconds);
   return oldTime;
  };
  console.log(oldTime);
  window.addEventListener("onload", useClosedTab);
  window.addEventListener("load", newTab);

  let result = localStorage.getItem("closedTabTime");
  let diffInMilliSeconds = Math.abs(Math.round(result - newTime));
console.log(diffInMilliSeconds);
  return diffInMilliSeconds;
};
export default useTimeDifference;
