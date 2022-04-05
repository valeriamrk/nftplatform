import React from "react";
import * as S from "./styles";
import { BiHeart } from "react-icons/bi";
import { LikesCounter } from "../../../presentational";

const NftCard = (props) => {

  return (
    <S.Wrapper>
      <S.ImgContainer>
        <S.NftImg src={props.img} />
      </S.ImgContainer>
      <S.Details>
        <S.Info>
          <S.InfoLeft>
            <S.CollectionName>{props.author}</S.CollectionName>
            <S.AssetName>{props.name}</S.AssetName>
          </S.InfoLeft>
          <S.InfoRight>
            <S.PriceTag>Price</S.PriceTag>
            <S.PriceValue>
              <S.EthLogo src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" />
              {props.price}
            </S.PriceValue>
            <LikesCounter likes={props.likes} />
          </S.InfoRight>
        </S.Info>
      </S.Details>
    </S.Wrapper>
  );
};

export { NftCard };
