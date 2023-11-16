import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../services/apiAuthServices";

export const userSignupAction = createAsyncThunk(
  "userSignupAction",
  async (credentials) => {
    const response = await apiAuthService.signup(credentials);
    return response;
  }
);
export const userLoginAction = createAsyncThunk(
  "userLoginAction",
  async (credentials, thunkApi) => {
    const response = await apiAuthService.login(credentials);
    setTimeout(() => {
      thunkApi.dispatch(getUserProfileAction());
    }, 1000);
    return response;
  }
);
export const getUserProfileAction = createAsyncThunk(
  "getUserProfileAction",
  async () => {
    const response = await apiAuthService.getUserProfile();
    return response.users[0];
  }
);

export const updateProfileAction = createAsyncThunk(
  "updateProfileAction",
  async (credentials) => {
    // console.log("2.signup data in async reducer", credentials);
    const response = await apiAuthService.updateProfile(credentials);
    // console.log("5.data after recieving response in async", response);
    return response;
  }
);

export const forgotPasswordAction = createAsyncThunk(
  "forgotPasswordAction",
  async (credentials) => {
    // console.log("2.signup data in async reducer", credentials);
    const response = await apiAuthService.forgotPassword(credentials);
    // console.log("5.data after recieving response in async", response);
    return response;
  }
);
