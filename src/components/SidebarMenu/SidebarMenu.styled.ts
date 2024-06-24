import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarMenuStyled = styled.ul`
  user-select: none;
  -webkit-user-drag: none;
`;
export const SidebarMenuTitle = styled.p<{ $isVisible: boolean }>`
  font-size: 12px;
  margin-left: 24px;
  margin-bottom: 8px;
  color: #a0aec0;
  font-family: "ALS Agrofont Medium", sans-serif;
  visibility: ${(props) => (props["$isVisible"] ? "hidden" : "visible")};
`;
export const SidebarMenuContent = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 24px;

  font-family: "ALS Agrofont Medium", sans-serif;
  ${(props) =>
    props["$active"]
      ? css`
          background: #f5f6ff;
          border-right: 4px solid #3c4bdc;
        `
      : css`
          &:hover {
            background-color: rgba(0, 0, 0, 0.01);
          }
        `}
`;
export const LinkMenu = styled(Link)<{ $active: boolean }>`
  display: flex;
  gap: 16px;
  color: var(--greyscale-800);
  text-decoration: none;
  ${(props) =>
    props["$active"] &&
    css`
      color: #3c4bdc;
      font-family: "ALS Agrofont Bold", sans-serif;
    `}
`;
