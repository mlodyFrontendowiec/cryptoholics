import React from "react";
import styled from "styled-components";

const Header = () => {
  const ScrollToArticle = () => {
    document.getElementById("article").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledHeader>
      <StyledH1>Cryptoholicans</StyledH1>
      <nav>
        <StyledList>
          <StyledListItem onClick={ScrollToArticle}>About</StyledListItem>
          <StyledListItem>Roadmap</StyledListItem>
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
  margin-left: 70px;
`;

const StyledHeader = styled.header`
  font-size: 20px;
  height: 70px;
  border-bottom: 4px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
