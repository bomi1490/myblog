import styled from "styled-components";
import * as React from "react";

const Project_myyummylunch = () => {
  return (
    <Background>
      <TitleText>마이야미런치 설명</TitleText>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(45deg, blueviolet, aquamarine);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.p`
  margin-left: 350px;
  margin-right: 350px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 1cm;
  font-family: Arial, Helvetica, sans-serif;
  display: center;
`;
const LinkText = styled.p`
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: 10;
  font-family: serif;
  display: center;
`;
export default Project_myyummylunch;
