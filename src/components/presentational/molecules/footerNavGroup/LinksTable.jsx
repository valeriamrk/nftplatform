import React from "react";
import * as S from "./styles";

const LinksTable = () => {
  return (
    <S.ListWrapper>
      <S.Column>
        <S.ListHeader>
          <h3>Marketplace</h3>
        </S.ListHeader>
        <S.ListItem>
          <a href="#">All NFTs</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Art</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Collectibles</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Domain names</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Music</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Photography</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Sports</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Trading Cards</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Utility</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Virtual Worlds</a>
        </S.ListItem>
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>My Account</h3>
        </S.ListHeader>
        <S.ListItem>
          <a href="#">Profile</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Favorites</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Watchlist</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">My Collections</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Settings</a>
        </S.ListItem>
        <S.ListHeader>
          <h3>Stats</h3>
        </S.ListHeader>
        <S.ListItem>
          <a href="#">Rankings</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Activity</a>
        </S.ListItem>
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>Resources</h3>
        </S.ListHeader>
        <S.ListItem>
          <a href="#">Help Center</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Platform Status</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Partners</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Gas-Free Marketplace</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Taxes</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Blog</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Docs</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Newsletter</a>
        </S.ListItem>
      </S.Column>
      <S.Column>
        <S.ListHeader>
          <h3>Company</h3>
        </S.ListHeader>
        <S.ListItem>
          <a href="#">About</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Careers</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Ventures</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#">Grants</a>
        </S.ListItem>
      </S.Column>
    </S.ListWrapper>
  );
};

export { LinksTable };
