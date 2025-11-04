import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "portal",
  initialState: {
    isLogged: true,
    currentTab: "My Profile",
  },

  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const {
  setIsLogged,
  setCurrentTab,

} = portalSlice.actions;

export default portalSlice.reducer;
