import {
  AccountImage,
  AccountInfo,
  AccountName,
  AccountPrivilege,
  AccountStyled,
} from "@components/Account/Account.styled.js";
import React, { useContext } from "react";
import { Profile } from "iconsax-react";
import { UserContext } from "@context/Context.ts";
import { IUserContext } from "../../types/data.ts";

const Account: React.FC = () => {
  const { user } = useContext(UserContext) as IUserContext;
  return (
    <AccountStyled>
      <AccountImage>
        <Profile size={22} />
      </AccountImage>
      <AccountInfo>
        <AccountName>{user.name}</AccountName>
        <AccountPrivilege>{user.privilege}</AccountPrivilege>
      </AccountInfo>
    </AccountStyled>
  );
};
export default Account;
