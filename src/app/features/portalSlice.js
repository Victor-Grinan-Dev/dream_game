import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "portal",
  initialState: {
    isLogged: false,
  },

  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const {
  setIsLogged,

} = portalSlice.actions;

export default portalSlice.reducer;
