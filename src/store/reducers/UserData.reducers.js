import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    defineUserData: (state) => {},
    editProfileName: (state) => {},
    removeUserData: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { defineUserData, editProfileName, removeUserData } =
  userData.actions;

export default userData.reducer;
