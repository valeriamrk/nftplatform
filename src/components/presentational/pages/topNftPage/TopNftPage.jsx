import React from "react";
import * as S from "./styles";
import {TopList} from '../../../presentational'
import { useSelector } from "react-redux";

const TopNftPage = () => {

  const statsData = useSelector(
    (state) => state.statsData.nftStats);

  return (
    <div>
      <S.TopContainer>
        <S.TextContainer>Top NFTs</S.TextContainer>
        <S.DescriptionContainer>The top NFTs on OpenOcean, ranked by volume, floor price and other statistics.</S.DescriptionContainer>
        <TopList statsData={statsData}/>
      </S.TopContainer>
    </div>
  );
};

export { TopNftPage };
