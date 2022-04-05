import React, { useEffect } from "react";
import * as S from "./styles";
import { HelpList, QuestionList, SearchBar } from "../../../presentational";
import { useSelector } from "react-redux";

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const helpItemsData = useSelector(
    (state) => state.helpCenterData.helpCenterItems
  );
  const helpQuestionsData = useSelector(
    (state) => state.helpCenterData.questionItems
  );

  return (
    <S.MainContainer>
      <S.BannerContainer>
        {/* <S.Banner
          src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
          alt="banner"
        /> */}
        <S.SearchContainer>
          <SearchBar white placeholder="Search" />
        </S.SearchContainer>
      </S.BannerContainer>
      <S.HelpListContainer>
        <HelpList helpItemsData={helpItemsData} />
      </S.HelpListContainer>
      <S.QuestionsListContainer>
        <QuestionList helpQuestionsData={helpQuestionsData} />
      </S.QuestionsListContainer>
    </S.MainContainer>
  );
};

export { ResourcesPage };
