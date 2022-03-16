import React, { useState } from "react";
import {
  PageBasicLayout, 
  LogoGroup,
  SearchBar,
  HeaderItemGroup,
  Footer,
  SideNavBar,
} from "../../../presentational";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { changeSidebarStatus, changeSidebarStatusClose } from "../../../../store/allDataSlice";




const MainPage = () => {

  const navbarLinks = useSelector(
    (state) => state.navbarLinksData.navbarLinks
  );

  const sidebarData = useSelector((state) => state.allData.sidebarIsOpened);


//   const [openNav, setOpenNav] = useState(false)

// const handleOpenNav = () => {
//   setOpenNav(!openNav)
//   console.log("opennav")
// }

const dispatch = useDispatch();

const handleSidebarStatus = () => {
  dispatch(changeSidebarStatus());
};

const handleSidebarStatusClose = () => {
  dispatch(changeSidebarStatusClose())
}


  return (
    <S.MainContainer>
      <PageBasicLayout>
        <PageBasicLayout.PageHeader>
          <LogoGroup />
          <SearchBar placeholder="Search items, collections, and accounts"/>
          <HeaderItemGroup navbarLinks={navbarLinks} handleSidebarStatus={handleSidebarStatus}/>
          {/* <HeaderItemGroup navbarLinks={navbarLinks} handleOpenNav={handleOpenNav} /> */}
        </PageBasicLayout.PageHeader>
        <PageBasicLayout.PageContent>
          <Outlet/>
        </PageBasicLayout.PageContent>
        <PageBasicLayout.PageFooter>
          <Footer/>
        </PageBasicLayout.PageFooter>
      </PageBasicLayout>
      {/* <SideNavBar openNav={openNav} /> */}
      <SideNavBar sidebarActive={sidebarData} handleSidebarStatusClose={handleSidebarStatusClose}/>
    </S.MainContainer>
  );
};

export { MainPage };
