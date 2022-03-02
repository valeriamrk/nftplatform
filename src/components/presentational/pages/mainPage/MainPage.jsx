import React from "react";
import {
  PageBasicLayout, 
  LogoGroup,
  SearchBar,
  HeaderItemGroup,
  Hero,
  Collections
} from "../../../presentational";

const MainPage = () => {
  return (
    <div>
      <PageBasicLayout>
        <PageBasicLayout.PageHeader>
          <LogoGroup />
          <SearchBar />
          <HeaderItemGroup />
        </PageBasicLayout.PageHeader>
        <PageBasicLayout.PageContent>
          {/* <Hero /> */}
          <Collections/>
          {/* outlet from routing */}
        </PageBasicLayout.PageContent>
      </PageBasicLayout>
    </div>
  );
};

export { MainPage };
