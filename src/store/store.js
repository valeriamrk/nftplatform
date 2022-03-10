import { configureStore } from "@reduxjs/toolkit";
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
  },
});

export default store;