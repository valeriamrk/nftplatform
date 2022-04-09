import React from "react";
import * as S from "./styles";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdVerified, MdLabel, MdEqualizer, MdVerticalSplit, MdBallot } from "react-icons/md";
import { Accordion } from "../../../presentational";

const CardOptions = () => {
  
  return (
    <S.OptionsWrapper>
      <S.Title>
        <S.Icon>
          <BiMenuAltLeft />
        </S.Icon>
        Description
      </S.Title>
      <S.TextContainer>
        <S.CreatedBy>
          Created by {""}
          <S.AutorLink
            href="https://opensea.io/collection/cryptocoven"
            name="crypto_coven"
          >
            crypto_coven
          </S.AutorLink>
          <MdVerified />
        </S.CreatedBy>
        <S.Text>
          You are a WITCH woven from the strings of a windchime. You dye your
          hair with henna and blood. Your magic spawns from the depths of the
          earth. You have written dissertations on enchanted clothing. YOU SEE
          WHAT MORTALS CANNOT IMAGINE!
        </S.Text>
      </S.TextContainer>
      <Accordion/>
    </S.OptionsWrapper>
  );
};

export { CardOptions };