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
              src="https://lh3.googleusercontent.com/H-LDthYRKPWJdIKEI3WrZFFpxetO77jl1ALd3t4BJQ3Qj661B3WfopzTJ1iNtjD4JqjsLLqblkfWNtaHEzRUsCcbLsUZEiVGkNGE=s550"
              alt=""
            />
            <S.InfoContainer>
            <S.Avatar
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/vlwJvLR-2R2YhO3t8ROoGngbgMaADLCe5FsOrb5hrgbxIW6rhEneeY79pI7GUS1vj_05XDOjke9Da_GdE1jdtyhWgEW71DSBlevsMg=s80"
                alt=""
              />
            <S.Author>
              <S.Name>Dreams</S.Name>
              <S.Link
                  
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2682286971963689196555642600990882324412171456684959899575241281247824052230"
                >
                  MeldaVNH
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
