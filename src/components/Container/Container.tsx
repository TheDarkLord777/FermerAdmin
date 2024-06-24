import { ContainerStyled } from "@components/Container/Container.styled.js";
import { Outlet } from "react-router-dom";
import React from "react";

const Container: React.FC = () => {
  return (
    <ContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};
export default Container;
