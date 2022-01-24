import React from "react";
import styled from "styled-components";
import tic from "./../../images/tic.svg";

const Roadmap = () => {
  return (
    <StyledSection id="roadmap">
      <article style={{ width: "100%" }}>
        <StyledH2>Our milestones</StyledH2>
        <StyledH2Topic>Roadmap</StyledH2Topic>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <div style={{ width: "33%" }}>
            <StyledH3>JANUARY 2022 (Q1)</StyledH3>
            <StyledList>
              <StyledListItem>
                <StyledDotYellow />
                Start designing a collection
              </StyledListItem>
              <StyledListItem>
                <StyledDotYellow />
                Completion of 1000 2D Art Collection
              </StyledListItem>
              <StyledListItem>
                <StyledDotYellow />
                Launching the project
              </StyledListItem>
              <StyledListItem>
                <StyledDotYellow />
                Creating a community in social media
              </StyledListItem>
              <StyledListItem>
                <StyledDotYellow />
                Launching advertising campaigns
              </StyledListItem>
            </StyledList>
          </div>
          <div style={{ width: "33%" }}>
            <StyledH3>FEBRUARY 2022 (Q1)</StyledH3>
            <StyledList>
              <StyledListItem>
                <StyledDot />
                IDO on Magic Eden
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Create a $ CHR token
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Airdrop to all Cryptoholicans holders
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Building social media, launching advertising campaigns
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Start of work on the Metaverse platform
              </StyledListItem>
            </StyledList>
          </div>
          <div style={{ width: "33%" }}>
            <StyledH3>March 2022 (Q1)</StyledH3>
            <StyledList>
              <StyledListItem>
                <StyledDot />
                Start of work on the game for users
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Create NFT platform for users
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Airdrop to all Cryptoholicans holders
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Starting work on the NFT creator
              </StyledListItem>
              <StyledListItem>
                <StyledDot />
                Collaboration with leading NFT projects
              </StyledListItem>
            </StyledList>
          </div>
        </section>
      </article>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0px 100px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
`;

const StyledH2Topic = styled.h2`
  font-size: 42px;
  margin-top: 10px;
`;

const StyledH3 = styled.h3`
  font-size: 25px;
  margin-top: 20px;
`;

const StyledList = styled.ul`
  list-style: none;
`;
const StyledDotGreen = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 20px;
  margin-left: 10px;
  background-color: #21b646;
  box-shadow: 0 0 0 5px rgb(33 182 70 / 37%);
`;
const StyledDotYellow = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 20px;
  margin-left: 10px;
  background-color: orange;
  box-shadow: 0 0 0 5px rgb(248 186 53 / 37%);
`;
const StyledDot = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 20px;
  margin-left: 10px;
  background-color: black;
  box-shadow: 0 0 0 5px rgb(0 0 0 / 37%);
`;

const StyledListItem = styled.li`
  display: flex;
  margin-top: 20px;
  align-items: center;
  font-size: 20px;
`;
export default Roadmap;
