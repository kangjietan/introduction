import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  /* background: linear-gradient(to right top, rgb(10, 25, 47), rgb(10, 25, 47)); */
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #426696;
    font-weight: 600;
    font-size: 3rem;
    opacity: 0.8;
  }

  h2 {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }

  h3 {
    color: #426696;
    opacity: 0.8;
    font-weight: 600;
  }
`;

export const GlassSection = styled.section`
  background: white;
  min-height: 80vh;
  width: 60%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
`;

export const Circle = styled.div`
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
`;

export const Circle1 = styled(Circle)`
  top: 5%;
  right: 15%;
`;

export const Circle2 = styled(Circle)`
  bottom: 5%;
  left: 10%;
`;

export const Dashboard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
`;

/** User */
export const User = styled.div``;

export const Profile = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
`;

export const UserHeading = styled.h3``;

export const Description = styled.p``;

/** Links */
export const Links = styled.div``;

export const Link = styled.div`
  display: flex;
  margin: 2rem 0;
  padding: 1rem 5rem;
  align-items: center;
`;

export const LinkImage = styled.img``;

export const LinkTitle = styled.h2`
  padding: 0 2rem;
`;

export const ProContainer = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  border-radius: 2rem;
  color: white;
  padding: 1rem;
  display: flex;
  margin: 0 1.5rem;
  margin-bottom: 1.5rem;
`;

/** Pro */
export const ProTitle = styled.h2`
  color: white !important;
  font-weight: 600 !important;
  flex: 1;
`;

export const ProImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

/** Games */
export const Games = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5rem;
`;

export const Status = styled.div`
  margin-bottom: 3rem;
`;

export const StatusTitle = styled.h1``;

export const StatusInput = styled.input`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border: none;
  width: 50%;
  padding: 0.5rem;
  border-radius: 2rem;
  outline: none;
`;

/** Cards */
export const Cards = styled.div``;

export const Card = styled.div`
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
`;

export const CardImage = styled.img``;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardInformationTitle = styled.h2``;

export const CardInformationDescription = styled.p``;

export const CardInformationProgress = styled.div`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(236, 236, 236);
    position: absolute;
    left: 60%; 
  }
`;

export const Percentage = styled.h2`
  font-weight: bold;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
