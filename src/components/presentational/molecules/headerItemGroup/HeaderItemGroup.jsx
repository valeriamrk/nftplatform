import React from "react";
import { HeaderItem } from "../../../presentational";
import * as S from "./styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const HeaderItemGroup = (props) => {

const {navbarLinks} = props

  return (
    <S.HeaderItemGroup>
              {navbarLinks.map((element) =>
            <HeaderItem
            path={element.path}
            label={element.label}
            />
              )}
      {/* // <HeaderItem>Collections</HeaderItem>
      // <HeaderItem>Stats</HeaderItem>
      // <HeaderItem>Resources</HeaderItem>
      // <HeaderItem>Create</HeaderItem> */}
      <S.HeaderIcon>
        <CgProfile />
      </S.HeaderIcon>
      <S.HeaderIcon>
        <MdOutlineAccountBalanceWallet />
      </S.HeaderIcon>
    </S.HeaderItemGroup>
  );
};

export { HeaderItemGroup };
