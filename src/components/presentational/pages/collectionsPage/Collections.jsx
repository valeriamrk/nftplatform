import React from "react";
import * as S from "./styles";
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'

const Collections = () => {
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
                <S.Divider/>
                </S.SocialIcon>
                <S.SocialIcon>
                <AiOutlineInstagram />
                <S.Divider/>
                </S.SocialIcon>
                <S.SocialIcon>
                <AiOutlineTwitter />
                <S.Divider/>
                </S.SocialIcon>
                <S.SocialIcon>
                <HiDotsVertical />
                <S.Divider/>
                </S.SocialIcon>
              </S.SocialIconsContent>
            </S.SocialIconsWrapper>
          </S.SocialIconsContainer>
        </S.EndRow>
      </S.InfoContainer>
    </div>
  );
};

export { Collections };
