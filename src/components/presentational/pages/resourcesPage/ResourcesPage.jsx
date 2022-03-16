import React from "react";
import * as S from "./styles";
import { SearchBar } from "../../../presentational";

const ResourcesPage = () => {
  return (
    <div>
      <S.BannerContainer>
        {/* <S.Banner
          src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
          alt="banner"
        /> */}
        <S.SearchContainer><SearchBar white placeholder="Search"/></S.SearchContainer>
      </S.BannerContainer>
    </div>
  );
};

export { ResourcesPage };
