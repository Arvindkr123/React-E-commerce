import { createSlice } from "@reduxjs/toolkit";
import { getUserProfileAction, userLoginAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfileData: undefined,
    userLoginData: undefined,
    isLoading: false,
  },
  reducers: {
    userLogout(state, action) {
      localStorage.clear();
      state.userLoginData = undefined;
      state.userProfileData = undefined;
    },
  },
  extraReducers: (builder) => {
    // this buider for the user  login 
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userLoginData = response;
      localStorage.setItem("idToken", response.idToken);
      localStorage.setItem("isLoggedIn", true);
    });

    // now this add case for the get usr profile 
    builder.addCase(getUserProfileAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userProfileData = response;
      state.isLoading = false;
    });

    // get the user profile if it is pending
    builder.addCase(getUserProfileAction.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export default authSlice;
export const authActions = authSlice.actions;
