import React, { useState } from "react";
import { HeaderItem, SideNavBar } from "../../../presentational";
import * as S from "./styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const HeaderItemGroup = (props) => {
  const { navbarLinks, handleSidebarStatus } = props;
  const [selectedIndex, setSelectedIndex] = React.useState();
  // const handleItemClick = (event, index, path) => {
  //   setSelectedIndex(index);
  //   navigate(path);
  //   console.log(index)
  // };

  return (
    <S.HeaderItemGroup>
      {navbarLinks.map((element, index) => (
          <HeaderItem
            path={element.path}
            label={element.label}
            index={index}
          />
      ))}
      <S.HeaderIcon>
        <CgProfile />
      </S.HeaderIcon>
      <S.HeaderIcon>
        <MdOutlineAccountBalanceWallet onClick={() => handleSidebarStatus()} />
      </S.HeaderIcon>
    </S.HeaderItemGroup>
  );
};

export { HeaderItemGroup };
