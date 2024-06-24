import { Moon, Sun1 } from "iconsax-react";
import {
  ControlSwitcherBackgroundMove,
  ControlThemeSelfContainer,
  ControlThemeStyled,
  ControlThemeSwitcher,
  ControlThemeSwitcherPart,
} from "@components/ControlTheme/ControlTheme.styled.js";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@context/Context.ts";
import { IThemeContext } from "../../types/data.ts";

interface IControlThemeProps {
  isSidebarOpen: boolean;
}

const ControlTheme: React.FC<IControlThemeProps> = ({ isSidebarOpen }) => {
  const [isExisting, setIsExisting] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("");
  const { toggleTheme } = useContext(ThemeContext) as IThemeContext;
  const Toggle = () => {
    setIsActive(isExisting ? "disabled" : "active");
    setIsExisting((prevState) => !prevState);
    toggleTheme();
  };

  const themes = [
    {
      title: "Light",
      icon: <Sun1 size="16" variant={"Bold"} />,
      isLight: !isExisting,
    },
    {
      title: "Dark",
      icon: <Moon size="16" variant={"Bold"} />,
      isLight: isExisting,
    },
  ];
  return (
    <ControlThemeStyled $isSidebarOpen={isSidebarOpen}>
      <ControlThemeSwitcher>
        <ControlSwitcherBackgroundMove
          $isSidebarOpen={isSidebarOpen}
          $isActive={isActive}
        ></ControlSwitcherBackgroundMove>
        <ControlThemeSelfContainer $isSidebarOpen={isSidebarOpen}>
          {themes.map((value, index) => (
            <ControlThemeSwitcherPart
              $isSidebarOpen={isSidebarOpen}
              $active={value.isLight}
              onClick={!value.isLight ? Toggle : undefined}
              key={index}
            >
              {value.icon} {!isSidebarOpen && value.title}
            </ControlThemeSwitcherPart>
          ))}
        </ControlThemeSelfContainer>
      </ControlThemeSwitcher>
    </ControlThemeStyled>
  );
};
export default ControlTheme;
