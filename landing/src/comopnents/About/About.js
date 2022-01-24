import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const About = () => {
  return (
    <StyledSection id="article">
      <article>
        <StyledH2>About</StyledH2>
        <StyledH2Topic>What is Crtptoholicans?</StyledH2Topic>
        <StyledParagraph>
          Cryptholicans is a project dedicated only to real cryptocurrency
          fanatics. If you are interested in a given cryptocurrency and are its
          loyal fan, you are also a cryptoholican.
        </StyledParagraph>
        <StyledParagraph>
          Cryptoholicans is a unique collection of 1000 NFT items. Each
          cryptoholican is committed to and faithful to a given cryptocurrency.
          Each hodler will have access to a platform Metaverse platform, where
          he can meet people who love the same cryptocurrency as he does.
        </StyledParagraph>
        <StyledParagraph>
          At the beginning, we plan to implement cryptoholicans for the top 100
          largest crypto projects, then we plan to build a system in which users
          will be able to create cryptoholics for our unique collections and
          receive a portion of the profits from sales.
        </StyledParagraph>
        <StyledParagraph>
          One of our plans is to build a game in which cryptocurrencies will
          take part in tournaments and perform tasks, but of course they will
          receive rewards in the form of CRH tokens or their beloved
          cryptocurrency.
        </StyledParagraph>
        <StyledParagraph>
          We are also planning to implement staking thanks to which users will
          be able to passively earn money on their cryptocurrencies.
        </StyledParagraph>
      </article>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 100vh;
  height: 100vh;
  padding: 20px 100px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
`;

const StyledH2Topic = styled.h2`
  font-size: 40px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  margin-top: 20px;
  width: 80%;
`;

export default About;
