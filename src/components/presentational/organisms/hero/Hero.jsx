import React from "react";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.HeroWrapper>
      <S.Container>
        <S.ContentWrapper>
          <S.TextContainer>
            <S.Title>Discover, collect, and sell extraordinary NFTs</S.Title>
            <S.Description>OpenOcean is the world&apos;s first and largest NFT marketplace</S.Description>
          </S.TextContainer>
        </S.ContentWrapper>
      </S.Container>
    </S.HeroWrapper>
  );
};

export { Hero };
