import styled from "styled-components";

export const HeadlineContainer = styled.div`
  width: 100%;
  text-align: center;

  @media only screen and (min-width: 1000px) {
    width: 50%;
    text-align: start;
  }
`;

export const HeadlineHeading1 = styled.h1`
  font-size: 30px;
  margin-bottom: 25px;
`;

export const HeadlineHeading3 = styled.h3`
  font-size: 18px;
  margin-bottom: 25px;
`;

export const AuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 400px;
  margin: auto;
  margin-top: 50px;

  @media only screen and (min-width: 1000px) {
    margin-top: auto;
  }
`;