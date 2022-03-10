import React from "react";
import * as S from "./styles";

const TopListItem = (props) => {
  const { id, author, avatar, volume, hours, days, floorPrice, owners, items } =
    props;

  return (
    <S.ListItemWrapper>
      <S.FirstCell>
        {id} <S.Avatar src={avatar} alt="avatar" /> {author}
      </S.FirstCell>
      <S.ListItem>
        {" "}
        <S.EthLogo
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt="eth"
        />
        {volume}
      </S.ListItem>
      <S.ListItem>{hours}</S.ListItem>
      <S.ListItem>{days}</S.ListItem>
      <S.ListItem>
        <S.EthLogo
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt="eth"
        />
        {floorPrice}
      </S.ListItem>
      <S.ListItem>{owners}</S.ListItem>
      <S.ListItem>{items}</S.ListItem>
    </S.ListItemWrapper>
  );
};

export { TopListItem };
