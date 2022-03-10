import * as S from "./styles";
import React from "react";
import { WalletList } from "../../../presentational";
import { useSelector } from "react-redux";

const CreatePage = () => {
  const walletsData = useSelector((state) => state.walletData.wallets);

  return (
    <S.TopContainer>
      <S.TextContainer>
        You need an Ethereum wallet to use OpenOcean.
      </S.TextContainer>
      <div>
        Connect with one of our available{" "}
        <S.Tooltip>
          wallet
          <S.TooltipText>
            A crypto wallet is an application or hardware device that allows
            individuals to store and retrieve digital items.
          </S.TooltipText>
        </S.Tooltip>{" "}
        providers or create a new one.
      </div>
      <WalletList walletsData={walletsData}/>
      {/* <WalletList test="test"/> */}
    </S.TopContainer>
  );
};

export { CreatePage };
