import React, { useRef, useState } from "react";
import {
  PageBasicLayout, 
  LogoGroup,
  SearchBar,
  HeaderItemGroup,
  Footer,
  SideNavBar,
  GlobalSearch,
} from "../../../presentational";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { changeSidebarStatus, changeSidebarStatusClose } from "../../../../store/allDataSlice";



const MainPage = (props) => {
  const {themeToggler} = props

  const navbarLinks = useSelector(
    (state) => state.navbarLinksData.navbarLinks
  );

  const sidebarData = useSelector((state) => state.allData.sidebarIsOpened);

  const nftCards = useSelector(
    (state) => state.nftCardsData.nftCards

  );  

  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const globalFilter = (event) => {
    const searchCard = event.target.value;
    setSearchValue(searchCard);  
    const filterData= nftCards.filter((element) => {
    return element.nft_name.toLowerCase().includes(searchCard.toLowerCase());
  });  
    if (searchCard === "") {
      setFilteredData([])
    } else {
      setFilteredData(filterData)
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setSearchValue("");
  };


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
          <GlobalSearch filterData={filteredData} searchValue={searchValue} setSearchValue={setSearchValue} handleFilter={globalFilter} clearInput={clearInput}/>
          <HeaderItemGroup navbarLinks={navbarLinks} handleSidebarStatus={handleSidebarStatus} themeToggler={themeToggler}/>
        </PageBasicLayout.PageHeader>
        <PageBasicLayout.PageContent>
          <Outlet/>
        </PageBasicLayout.PageContent>
        <PageBasicLayout.PageFooter>
          <Footer/>
        </PageBasicLayout.PageFooter>
      </PageBasicLayout>
      <SideNavBar sidebarActive={sidebarData} handleSidebarStatusClose={handleSidebarStatusClose}/>
    </S.MainContainer>
  );
};

export { MainPage };
