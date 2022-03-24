import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarIsOpened: false,
};

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    changeSidebarStatus: (state, action) => {
      state.sidebarIsOpened = !state.sidebarIsOpened;
    },
    changeSidebarStatusClose: (state) => {
      state.sidebarIsOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSidebarStatus, changeSidebarStatusClose } = allDataSlice.actions;

export default allDataSlice.reducer;
