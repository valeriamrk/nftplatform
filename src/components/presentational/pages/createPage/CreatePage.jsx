import * as S from "./styles";
import React, { useEffect } from "react";
import { SideNavBar, WalletList } from "../../../presentational";
import { useSelector } from "react-redux";
import { useState } from "react";

const CreatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const walletsData = useSelector((state) => state.walletData.wallets);
  // const shortList = true
  const [shortList, setShortList] = useState(true)

  const changeListLength = () => {
    setShortList(!shortList)
  }

  return (
    <S.TopContainer>
      <S.TextContainer>
        You need an Ethereum wallet to use OpenOcean.
      </S.TextContainer>
      <S.DescriptionContainer>
        Connect with one of our available{" "}
        <S.Tooltip>
          wallet
          <S.TooltipText>
            A crypto wallet is an application or hardware device that allows
            individuals to store and retrieve digital items.
          </S.TooltipText>
        </S.Tooltip>{" "}
        providers or create a new one.
      </S.DescriptionContainer>
      <WalletList walletsData={walletsData} shortList={shortList} changeListLength={changeListLength}/>
    </S.TopContainer>
  );
};

export { CreatePage };
