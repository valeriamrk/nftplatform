import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {
  HelpList,
  QuestionList,
  SearchBar,
  FaqItems,
} from "../../../presentational";
import { useSelector } from "react-redux";

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const helpItemsData = useSelector(
    (state) => state.helpCenterData.helpCenterItems
  );
  const helpQuestionsData = useSelector(
    (state) => state.helpCenterData.questionItems
  );

  const [searchValue, setSearchValue] = useState("");
  

  const filteredHelpItems = helpItemsData.filter((element) => {
    return (
      element.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      element.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  const filteredQuestionsData = helpQuestionsData.filter((element) => {
    return element.label.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <S.MainContainer>
      <S.BannerContainer>
        {/* <S.Banner
          src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
          alt="banner"
        /> */}

        <S.SearchContainer>
          <SearchBar
            white
            placeholder="Search"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </S.SearchContainer>
      </S.BannerContainer>
      <FaqItems
        helpItemsData={helpItemsData}
        filteredHelpItems={filteredHelpItems}
        helpQuestionsData={helpQuestionsData}
        filteredQuestionsData={filteredQuestionsData}
      />
    </S.MainContainer>
  );
};

export { ResourcesPage };
