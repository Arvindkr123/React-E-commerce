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
    logout: (state, action) => {},
  },
  extraReducers: (builder) => {
    // case for the login user
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const response = action.payload;
      //console.log(response);
      state.userLoginData = response;
      localStorage.setItem("idToken", response.idToken);
      localStorage.setItem("isLoggedIn", true);
    });

    // case for the get profile data
    builder.addCase(getUserProfileAction.fulfilled, (state, action) => {
      // console.log(action.payload);
      const response = action.payload;
      state.userProfileData = response;
      // console.log(state.userProfileData);
      state.isLoading = false;
    });

    builder.addCase(getUserProfileAction.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export const authActions = authSlice.actions;
export default authSlice;
