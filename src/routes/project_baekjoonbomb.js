import styled from "styled-components";
import * as React from "react";

const Project_baekjoonbomb = () => {
  return <Background>hello</Background>;
};

const Background = styled.div`
  background: rgba(107, 147, 187, 0.74);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.p`
  max-width: 850px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 1cm;
  font-family: Arial, Helvetica, sans-serif;
  display: center;
`;
const BasicText = styled.p`
  margin-left: 350px;
  margin-right: 350px;
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: 10;

  display: center;
`;
export default Project_baekjoonbomb;
