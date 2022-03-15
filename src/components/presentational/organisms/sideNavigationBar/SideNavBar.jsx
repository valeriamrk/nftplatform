import React, { useState } from "react";
import { WalletList } from "../../../presentational";
import * as S from "./styles";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";

const SideNavBar = (props) => {
  const walletsData = useSelector((state) => state.walletData.wallets);

  const { openNav, sidebarActive } = props;

  return (
    <S.SideNav openNav={openNav} sidebarActive={sidebarActive}>
      <S.NavHeader>
        <S.Icon>
          <IoPersonCircle />
        </S.Icon>
        My wallet
      </S.NavHeader>
      <S.Description>
        Connect with one of our available{" "}
        <S.Tooltip>
          wallet
          <S.TooltipText>
            A crypto wallet is an application or hardware device that allows
            individuals to store and retrieve digital items.
          </S.TooltipText>
        </S.Tooltip>{" "}
        providers or create a new one.
      </S.Description>
      <S.WalletContainer>
        <WalletList walletsData={walletsData} sidebar />
      </S.WalletContainer>
    </S.SideNav>
  );
};

export { SideNavBar };
