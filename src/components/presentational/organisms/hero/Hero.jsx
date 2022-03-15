import React from "react";
import { MyButton, SideNavBar } from "../../../presentational";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.HeroWrapper>
      <S.Container>
        <S.ContentWrapper>
          <S.TextContainer>
            <S.Title>Discover, collect, and sell extraordinary NFTs</S.Title>
            <S.Description>
              OpenOcean is the world&apos;s first and largest NFT marketplace
            </S.Description>
            <S.BtnContainer>
              <MyButton>Explore</MyButton>
              <MyButton primary>Create</MyButton>
            </S.BtnContainer>
          </S.TextContainer>
          <S.CardContainer>
            <S.MainImage
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <S.InfoContainer>
            <S.Avatar
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
            <S.Author>
              <S.Name>Jolly</S.Name>
              <S.Link
                  
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </S.Link>
            </S.Author>
            </S.InfoContainer>
          </S.CardContainer>
        </S.ContentWrapper>
      </S.Container>
    </S.HeroWrapper>
  );
};

export { Hero };
