import React, { useState } from "react";
import { HeaderItem, SideNavBar } from "../../../presentational";
import * as S from "./styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const HeaderItemGroup = (props) => {

const {navbarLinks, handleSidebarStatus} = props


  return (
    <S.HeaderItemGroup>
              {navbarLinks.map((element) =>
            <HeaderItem
            path={element.path}
            label={element.label}
            />
              )}
      <S.HeaderIcon>
        <CgProfile />
      </S.HeaderIcon>
      <S.HeaderIcon>
        <MdOutlineAccountBalanceWallet onClick={() => handleSidebarStatus()}/>
      </S.HeaderIcon>
    </S.HeaderItemGroup>
  );
};

export { HeaderItemGroup };
