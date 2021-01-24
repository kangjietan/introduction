import React from "react";

import { createGlobalStyle } from "styled-components";

import {
  Card,
  CardImage,
  CardInformation,
  CardInformationDescription,
  CardInformationProgress,
  CardInformationTitle,
  Cards,
  Circle1,
  Circle2,
  Dashboard,
  Description,
  Games,
  GlassSection,
  Link,
  LinkImage,
  Links,
  LinkTitle,
  Main,
  Percentage,
  ProContainer,
  Profile,
  ProImage,
  ProTitle,
  Status,
  StatusInput,
  StatusTitle,
  User,
  UserHeading,
} from "./style";

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
        <GlassSection>
          <Dashboard>
            <User>
              <Profile src="./images/profile.jpg" alt="" />
              <UserHeading>Kang Jie Tan</UserHeading>
              <Description>Hello</Description>
            </User>
            <Links>
              <Link>
                <LinkImage src="./images/twitch.png" alt="" />
                <LinkTitle>Streams</LinkTitle>
              </Link>
              <Link>
                <LinkImage src="./images/steam.png" alt="" />
                <LinkTitle>Games</LinkTitle>
              </Link>
              <Link>
                <LinkImage src="./images/upcoming.png" alt="" />
                <LinkTitle>New</LinkTitle>
              </Link>
              <Link>
                <LinkImage src="./images/library.png" alt="" />
                <LinkTitle>Library</LinkTitle>
              </Link>
            </Links>
            <ProContainer>
              <ProTitle>Join pro for free games.</ProTitle>
              <ProImage src="./images/controller.png" alt="" />
            </ProContainer>
          </Dashboard>
          <Games>
            <Status>
              <StatusTitle>Active Games</StatusTitle>
              <StatusInput type="text" />
            </Status>
            <Cards>
              <Card>
                <CardImage src="./images/assassins.png" alt="" />
                <CardInformation>
                  <CardInformationTitle>Assassins Creed Valhalla</CardInformationTitle>
                  <CardInformationDescription>PS5 Version</CardInformationDescription>
                  <CardInformationProgress></CardInformationProgress>
                </CardInformation>
                <Percentage>60%</Percentage>
              </Card>
              <Card>
                <CardImage src="./images/sackboy.png" alt="" />
                <CardInformation>
                  <CardInformationTitle>Sackbody A Great Adventure</CardInformationTitle>
                  <CardInformationDescription>PS5 Version</CardInformationDescription>
                  <CardInformationProgress></CardInformationProgress>
                </CardInformation>
                <Percentage>60%</Percentage>
              </Card>
              <Card>
                <CardImage src="./images/spiderman.png" alt="" />
                <CardInformation>
                  <CardInformationTitle>Spiderman</CardInformationTitle>
                  <CardInformationDescription>PS5 Version</CardInformationDescription>
                  <CardInformationProgress></CardInformationProgress>
                </CardInformation>
                <Percentage>60%</Percentage>
              </Card>
            </Cards>
          </Games>
        </GlassSection>
        <Circle1 />
        <Circle2 />
      </Main>
    </div>
  );
};
