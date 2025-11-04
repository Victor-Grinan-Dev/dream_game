import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "portal",
  initialState: {
    isLogged: true,
    currentTab: "My Profile",
    userdata:{
      username: "Player1",
      playerLevel: 1,
      playerXP: 0,
      army: [],
      reserveFormations: [],
      currentCampaign: [],
    },
  },

  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setUserdata: (state, action) => {
      state.userdata = action.payload;
    }
  },
});

export const {
  setIsLogged,
  setCurrentTab,
  setUserdata,

} = portalSlice.actions;

export default portalSlice.reducer;
