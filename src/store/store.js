import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
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
  },
});

export default store;