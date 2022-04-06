import React, { useState } from "react";
import { HeaderItem, SideNavBar } from "../../../presentational";
import * as S from "./styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderItemGroup = (props) => {
  const { navbarLinks, handleSidebarStatus } = props;
  const [selectedIndex, setSelectedIndex] = React.useState();
  const itemClick = (index) => {
      setSelectedIndex(index);
  };

  return (
    <S.HeaderItemGroup>
      {navbarLinks.map((element, index) => (
        <HeaderItem
          path={element.path}
          label={element.label}
          index={index}
          itemClick={itemClick}
          selected={selectedIndex === index}
        />
      ))}
      <Link to="/create">
        <S.HeaderIcon>
          <CgProfile />
        </S.HeaderIcon>
      </Link>
      <S.HeaderIcon>
        <MdOutlineAccountBalanceWallet onClick={() => handleSidebarStatus()} />
      </S.HeaderIcon>
    </S.HeaderItemGroup>
  );
};

export { HeaderItemGroup };
