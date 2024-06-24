import { RightContainerStyled } from "@components/RightContainer/RightContainer.styled.js";
import Header from "@components/Header/Header.jsx";
import Container from "@components/Container/Container.jsx";
import React from "react";

interface RightContainer {
  isSidebarOpen: boolean;
}

const RightContainer: React.FC<RightContainer> = ({ isSidebarOpen }) => {
  return (
    <RightContainerStyled $isSidebarOpen={isSidebarOpen}>
      <Header />
      <Container />
    </RightContainerStyled>
  );
};
export default RightContainer;
