import React from "react";
import styled from "styled-components";

const Header = () => {
  const ScrollToArticle = (name) => {
    document.getElementById(name).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledHeader>
      <StyledH1>Cryptoholicans</StyledH1>
      <nav>
        <StyledList>
          <StyledListItem onClick={() => ScrollToArticle("article")}>
            About
          </StyledListItem>
          <StyledListItem onClick={() => ScrollToArticle("roadmap")}>
            Roadmap
          </StyledListItem>
          <StyledListItem>Benefits</StyledListItem>
          <StyledListItem>Team</StyledListItem>
          <StyledListItem>FAQ</StyledListItem>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-left: 100px;
`;

const StyledHeader = styled.header`
  font-size: 20px;
  height: 70px;
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 400px;
  margin-right: 70px;
`;

const StyledListItem = styled.li`
  cursor: pointer;
`;

export default Header;
