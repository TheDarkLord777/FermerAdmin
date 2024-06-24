import styled from "styled-components";

export const AccountStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: 176px;
  height: 100%;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
`;
export const AccountImage = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--greyscale-600);
  border-radius: 50%;
  background: var(--greyscale-300);
`;
export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const AccountName = styled.div`
  font-family: "ALS Agrofont Bold", sans-serif;
  letter-spacing: 0.3px;
  color: var(--greyscale-900);
`;
export const AccountPrivilege = styled.div`
  letter-spacing: 0;
  font-size: 12px;
  color: #718096;
  font-family: "ALS Agrofont Medium", sans-serif;
`;
