import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import helpCenterSlice from "./helpCenterSlice";
import navbarLinksSlice from "./navbarLinksSlice";
import nftCardsSlice  from "./nftCardsSlice";
import statsSlice from "./statsSlice";
import walletSlice from "./walletSlice";


const store = configureStore({
  reducer: {
    nftCardsData: nftCardsSlice,
    navbarLinksData: navbarLinksSlice,
    statsData: statsSlice,
    walletData: walletSlice,
    allData: allDataSlice,
    helpCenterData:helpCenterSlice,
  },
});

export default store;