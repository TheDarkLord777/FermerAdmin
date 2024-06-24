import React, { useState } from "react";
import {
  SidebarMenuContent,
  SidebarMenuStyled,
  SidebarMenuTitle,
  LinkMenu,
} from "@components/SidebarMenu/SidebarMenu.styled.js";
import {
  Book1,
  Chart21,
  Home2,
  Notepad2,
  Profile2User,
  StatusUp,
} from "iconsax-react";
import { useLocation } from "react-router-dom";

interface SidebarMenu {
  isSidebarOpen: boolean;
}
const SidebarMenu: React.FC<SidebarMenu> = ({ isSidebarOpen }) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const Links = [
    {
      title: "Главная",
      route: "/",
      icon: (isActive: boolean) => (
        <Home2 size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
    {
      title: "Курсы",
      route: "/courses",
      icon: (isActive: boolean) => (
        <Notepad2 size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
    {
      title: "Книги",
      route: "/books",
      icon: (isActive: boolean) => (
        <Book1 size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
    {
      title: "Mening tomorqam",
      route: "/mening-tomorqam",
      icon: (isActive: boolean) => (
        <Chart21 size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
    {
      title: "Отчеты",
      route: "/reports",
      icon: (isActive: boolean) => (
        <StatusUp size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
    {
      title: "Студенты",
      route: "/students",
      icon: (isActive: boolean) => (
        <Profile2User size="24" variant={isActive ? "Bold" : "Linear"} />
      ),
    },
  ];

  return (
    <>
      <SidebarMenuTitle $isVisible={isSidebarOpen}>МЕНЮ</SidebarMenuTitle>
      <SidebarMenuStyled>
        {Links.map((link, index) => {
          const isActive = activeRoute === link.route;
          return (
            <SidebarMenuContent key={index} $active={isActive}>
              <LinkMenu
                to={link.route}
                $active={isActive}
                onClick={() => setActiveRoute(link.route)}
              >
                {link.icon(isActive)}
                {!isSidebarOpen && link.title}
              </LinkMenu>
            </SidebarMenuContent>
          );
        })}
      </SidebarMenuStyled>
    </>
  );
};

export default SidebarMenu;
