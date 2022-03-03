import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  navbarLinks: [
    { path: "/collections", label: "Collections" },
    { path: "/stats", label: "Stats"},
    { path: "/resources", label: "Resources"},
    { path: "/create", label: "Create"},
  ],
};

export const navbarLinksSlice = createSlice({
  name: "navbarLinksData",
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
// export const {} = navbarLinksSlice.actions;

export default navbarLinksSlice.reducer;