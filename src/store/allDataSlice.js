import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarIsOpened: false ,
};

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    changeSidebarStatus: (state, action) => {
      state.sidebarIsOpened = !state.sidebarIsOpened
      console.log("sidebar")
    },
    // changeSidebarStatusClose: (state) => {
    //   state.sidebarState.map((element) => {
    //     element.opened = false;
    //     return element;
    //   });
    // },
  },
});

// Action creators are generated for each case reducer function
export const {changeSidebarStatus} = allDataSlice.actions;

export default allDataSlice.reducer;
