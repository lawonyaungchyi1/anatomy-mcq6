import { css, keyframes } from "styled-components";
import styled from "styled-components";

const breatheAnimation = keyframes`
 0% { left : -130px }
 100% { left : 0px }
`;

export const Container = {
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "auto",
  top: "20%",
};

export const MessageBox = styled.div`
  width: 50%;
  word-wrap: break-word;
  position: relative;
  top: 20px;
  border: 3px solid #2ec4b6;
  padding: 6px;
  border-radius: 10px;
  color: #011627;
  font-weight: medium;
  box-shadow: 8px 0 6px 4px #f2e8cf;
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  /* animation-iteration-count: infinite; */
`;
