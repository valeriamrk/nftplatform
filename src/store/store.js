import { configureStore } from "@reduxjs/toolkit";
import navbarLinksSlice from "./navbarLinksSlice";
import nftCardsSlice  from "./nftCardsSlice";


const store = configureStore({
  reducer: {
    nftCardsData: nftCardsSlice,
    navbarLinksData: navbarLinksSlice,
  },
});

export default store;