import {
  Bell,
  BellHolder,
  HeaderLeftSide,
  HeaderLeftSideInside,
  HeaderStyled,
  PageTitle,
  SearchByLoginAndEmail,
  SearchIcon,
  VerticalLine,
} from "@components/Header/Header.styled.ts";
import { useLocation } from "react-router-dom";
import Account from "@components/Account/Account.tsx";
import React from "react";

const Header: React.FC = () => {
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Bosh sahifa";
      case "/courses":
        return "Все курсы";
      case "/reports":
        return "Отчеты";
      case "/students":
        return "Студенты";

      default:
        return "404";
    }
  };
  return (
    <HeaderStyled>
      <PageTitle>{getPageTitle()}</PageTitle>
      <HeaderLeftSide>
        <HeaderLeftSideInside>
          <SearchByLoginAndEmail placeholder={"Поиск по логину/email"} />
          <SearchIcon size={20} />
        </HeaderLeftSideInside>
        <BellHolder>
          <Bell />
        </BellHolder>

        <VerticalLine />
        <Account />
      </HeaderLeftSide>
    </HeaderStyled>
  );
};
export default Header;
