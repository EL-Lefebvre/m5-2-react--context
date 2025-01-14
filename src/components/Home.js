import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAppTitle from "./useAppTitle";
import {GameContext} from "./GameContext";

const Home = () => {
  const {numCookies, setNumCookies, useAppTitle} = useContext(GameContext);
  return (
    <Wrapper>
      <Title>Cookie game</Title>
      <Link to="/game">Go to game</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
`;

export default Home;
