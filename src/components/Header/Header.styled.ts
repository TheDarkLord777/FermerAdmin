import styled from "styled-components";
import { SearchNormal1 } from "iconsax-react";
import { ReactComponent as BellIcon } from "@assets/bell.svg";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 96px;
  border-bottom: 1px solid var(--greyscale-300);
  background: var(--white);
  padding: 0 30px;
  transition: background-color 0.4s;
`;
export const PageTitle = styled.h3`
  font-family: "ALS Agrofont BoldExpanded", sans-serif;
  color: var(--greyscale-800);
`;
export const HeaderLeftSide = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 652px;
  padding-top: 24px;
  padding-bottom: 16px;
`;
export const HeaderLeftSideInside = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  max-width: 380px;
`;
export const SearchByLoginAndEmail = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 16px 0 40px;
  border-radius: 12px;
  background: var(--greyscale-50);

  &::placeholder {
    font-family: "ALS Agrofont Medium", sans-serif;
    color: var(--greyscale-500);
  }
`;
export const Bell = styled(BellIcon)`
  fill: var(--greyscale-900);
`;
export const BellHolder = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;
export const VerticalLine = styled.hr`
  width: 1px;
  height: 40px;
  border: 1px solid #eeeff2;
`;
export const SearchIcon = styled(SearchNormal1)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
