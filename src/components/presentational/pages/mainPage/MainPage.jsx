import React from "react";
import {
  PageBasicLayout, 
  LogoGroup,
  SearchBar,
  HeaderItemGroup,
} from "../../../presentational";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "./styles";


const MainPage = () => {

  const navbarLinks = useSelector(
    (state) => state.navbarLinksData.navbarLinks
  );

  return (
    <S.MainContainer>
      <PageBasicLayout>
        <PageBasicLayout.PageHeader>
          <LogoGroup />
          <SearchBar />
          <HeaderItemGroup navbarLinks={navbarLinks}/>
        </PageBasicLayout.PageHeader>
        <PageBasicLayout.PageContent>
          <Outlet/>
        </PageBasicLayout.PageContent>
      </PageBasicLayout>
    </S.MainContainer>
  );
};

export { MainPage };
