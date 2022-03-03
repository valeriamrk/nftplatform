import React from "react";
import {
  PageBasicLayout, 
  LogoGroup,
  SearchBar,
  HeaderItemGroup,
  Hero,
  Collections
} from "../../../presentational";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const MainPage = () => {

  const navbarLinks = useSelector(
    (state) => state.navbarLinksData.navbarLinks
  );

  return (
    <div>
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
    </div>
  );
};

export { MainPage };
