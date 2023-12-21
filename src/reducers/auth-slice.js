import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfileData: undefined,
    userLoginData: undefined,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userLoginData = response;
      localStorage.setItem("idToken", response.idToken);
      localStorage.setItem("isLoggedIn", true);
    });
  },
});

export default authSlice.actions;
