import React from "react";

import { createGlobalStyle } from "styled-components";

import { Circle1, Circle2, GlassSection, Main } from "./style";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Main>
        <GlassSection></GlassSection>
        <Circle1 />
        <Circle2 />
      </Main>
    </div>
  );
};