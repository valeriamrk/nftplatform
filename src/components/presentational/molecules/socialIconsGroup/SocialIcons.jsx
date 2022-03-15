import React from "react";
import { MyButton } from "../../../presentational";
import { BsTwitter, BsInstagram, BsYoutube, BsEnvelope } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { ImReddit } from "react-icons/im";
import * as S from "./styles";


const SocialIcons = () => {
  return (
    <S.Wrapper>
      <S.Header>Join the community</S.Header>
      <S.IconsGroup>
        <MyButton icon><BsTwitter/></MyButton>
        <MyButton icon><BsInstagram/></MyButton>
        <MyButton icon><SiDiscord/></MyButton>
        <MyButton icon><ImReddit/></MyButton>
        <MyButton icon><BsYoutube/></MyButton>
        <MyButton icon><BsEnvelope/></MyButton>
      </S.IconsGroup>
    </S.Wrapper>
  );
};

export { SocialIcons };
