import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  helpCenterItems: [
    { title: "Getting Started", Description: "Learn how to create an account, set up your wallet, and what you can do on OpenOcean" },
    { title: "Buying", Description: "Learn how to purchase your first NFT and understand gas fees and what's gas free on OpenOcean"},
    { title: "Selling", Description: "Learn how list your NFTs for sale and understand the different ways to list your NFTs"},
    { title: "Creating", Description: "Learn how to create your very first NFT and how to create your NFT collections so you can begin selling and sharing"},
    { title: "FAQ", Description: "Learn answers to frequently asked questions on OpenSea"},
    { title: "User Safety", Description: "Learn more about anti-fraud and user safety processes on OpenSea"},
    { title: "Partners", Description: "Learn how you can partner with us to showcase your NFT drops"},
    { title: "Developers", Description: "Learn how you can develop with OpenSea"},
  ],
};

export const helpCenterSlice = createSlice({
  name: "helpCenterData",
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
// export const {} = helpCenterSlice.actions;

export default helpCenterSlice.reducer;









