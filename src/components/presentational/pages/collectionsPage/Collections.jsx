import React from "react";
import * as S from "./styles";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { NftCard } from "../../../presentational";
import { useSelector } from "react-redux";


const Collections = (props) => {

  const nftCards = useSelector((state) => state.nftCardsData.nftCards);


  return (
    <div>
      <S.BannerImageContainer>
        <S.BannerImage
          src="https://www.cryptocoven.xyz/opengraph.png"
          alt="banner"
        />
      </S.BannerImageContainer>
      <S.InfoContainer>
        <S.MidRow>
          <S.ProfileImg
            src="https://lh3.googleusercontent.com/E8MVasG7noxC0Fa_duhnexc2xze1PzT1jzyeaHsytOC4722C2Zeo7EhUR8-T6mSem9-4XE5ylrCtoAsceZ_lXez_kTaMufV5pfLc3Fk=s130"
            alt="avatar"
          />
        </S.MidRow>
        <S.EndRow>
          <S.SocialIconsContainer>
            <S.SocialIconsWrapper>
              <S.SocialIconsContent>
                <S.SocialIcon>
                  <CgWebsite />
                  <S.Divider />
                </S.SocialIcon>
                <S.SocialIcon>
                  <AiOutlineInstagram />
                  <S.Divider />
                </S.SocialIcon>
                <S.SocialIcon>
                  <AiOutlineTwitter />
                  <S.Divider />
                </S.SocialIcon>
                <S.SocialIcon>
                  <HiDotsVertical />
                  <S.Divider />
                </S.SocialIcon>
              </S.SocialIconsContent>
            </S.SocialIconsWrapper>
          </S.SocialIconsContainer>
        </S.EndRow>
        <S.MidRow>
          <S.Title>Crypto Coven</S.Title>
        </S.MidRow>
        <S.MidRow>
          <S.CreatedBy>
            Created by {""}
            <S.AutorLink
              href="https://opensea.io/collection/cryptocoven"
              name="crypto_coven"
            >
              crypto_coven
            </S.AutorLink>
          </S.CreatedBy>
        </S.MidRow>
        <S.MidRow>
          <S.StatsContainer>
            <S.CollectionStat>
              <S.StatValue>9.8K</S.StatValue>
              <S.StatName>items</S.StatName>
            </S.CollectionStat>
            <S.CollectionStat>
              <S.StatValue>4.8K</S.StatValue>
              <S.StatName>owners</S.StatName>
            </S.CollectionStat>
            <S.CollectionStat>
              <S.StatValue>
                <S.EthLogo
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                0.969
              </S.StatValue>
              <S.StatName>floor price</S.StatName>
            </S.CollectionStat>
            <S.CollectionStat>
              <S.StatValue>
                <S.EthLogo
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                7.5K
              </S.StatValue>
              <S.StatName>volume traded</S.StatName>
            </S.CollectionStat>
          </S.StatsContainer>
        </S.MidRow>
        <S.MidRow>
          <S.Description>it's the season of the witch. 🌙</S.Description>
        </S.MidRow>
      </S.InfoContainer>
      <S.NftCardCollection>
        {nftCards.map((element) =>
            <NftCard
            id={element.id}
            author={element.author}
            name={element.nft_name}
            img={element.img}
            price={element.price}
            likes={element.likes}
            />

        )}




      </S.NftCardCollection>
    </div>
  );
};

export { Collections };
