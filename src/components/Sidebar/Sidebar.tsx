import {
  ArrowLeft,
  ArrowRight,
  ExpandAddition,
  LogoContainer,
  SidebarStyled,
} from "@components/Sidebar/Sidebar.styled.js";
import React, { useEffect, useState } from "react";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu.tsx";
import ControlTheme from "@components/ControlTheme/ControlTheme.tsx";
import { ISidebarProps } from "../../types/data.ts";
import { ReactComponent as LogoSmall } from "@assets/logo_small.svg";
import { ReactComponent as LogoBig } from "@assets/Logo.svg";

const Sidebar: React.FC<ISidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [arrow, setArrow] = useState(<ArrowLeft />);
  const [logoPath, setLogoPath] = useState(<LogoSmall />);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isSidebarOpen) {
      setArrow(<ArrowRight />);
      setLogoPath(<LogoSmall />);
    } else {
      setArrow(<ArrowLeft />);
      setLogoPath(<LogoBig />);
    }
  }, [isSidebarOpen]);

  return (
    <SidebarStyled $isSidebarOpen={isSidebarOpen}>
      <LogoContainer $isSidebarOpen={isSidebarOpen}>
        {logoPath}
        <ExpandAddition onClick={toggleSidebar}>{arrow}</ExpandAddition>
      </LogoContainer>
      <SidebarMenu isSidebarOpen={isSidebarOpen} />
      <ControlTheme isSidebarOpen={isSidebarOpen} />
    </SidebarStyled>
  );
};
export default Sidebar;
