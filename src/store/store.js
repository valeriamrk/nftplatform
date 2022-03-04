import { configureStore } from "@reduxjs/toolkit";
import navbarLinksSlice from "./navbarLinksSlice";
import nftCardsSlice  from "./nftCardsSlice";
import statsSlice from "./statsSlice";


const store = configureStore({
  reducer: {
    nftCardsData: nftCardsSlice,
    navbarLinksData: navbarLinksSlice,
    statsData: statsSlice,
  },
});

export default store;