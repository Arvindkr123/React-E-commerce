import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiAuthService } from "../services/ApiAuthServices";

// this thunk for the signup user
export const userSignUpAction = createAsyncThunk(
  "userSignupAction",
  async (credentials) => {
    const response = ApiAuthService.signup(credentials);
    return response;
  }
);

export const userLoginAction = createAsyncThunk(
  "userLoginAction",
  async (credentials, thunkApi) => {
    // console.log(credentials);
    const response = await ApiAuthService.login(credentials);
    // console.log(response);
    setTimeout(() => {
      thunkApi.dispatch(getUserProfileAction());
    }, 1000);
    return response;
  }
);

export const forgotPasswordAction = createAsyncThunk(
  "forgotPasswordAction",
  async (credentials) => {
    const response = await ApiAuthService.forgetPassword(credentials);
    return response;
  }
);

export const getUserProfileAction = createAsyncThunk(
  "getUserProfileAction",
  async () => {
    const response = await ApiAuthService.getUserProfile();
    // console.log(response.users[0]);
    return response.users[0];
  }
);
