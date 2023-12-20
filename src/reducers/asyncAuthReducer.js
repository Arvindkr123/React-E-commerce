import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../services/apiAuthServices";

// this is for the signup user
export const userSignupAction = createAsyncThunk(
  "userSignupAction",
  async (credentials) => {
    const response = await apiAuthService.signup(credentials);
    return response;
  }
);

// user login async thunk
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

// this is get user profile data
export const getUserProfileAction = createAsyncThunk(
  "getUserProfileAction",
  async () => {
    const response = await apiAuthService.getUserProfile();
    return response.users[0];
  }
);

// this is for the update profile async thunk
export const updateProfileAction = createAsyncThunk(
  "updateProfileAction",
  async (credentials) => {
    // console.log("2.signup data in async reducer", credentials);
    const response = await apiAuthService.updateProfile(credentials);
    // console.log("5.data after recieving response in async", response);
    return response;
  }
);

// this is async thunk for the forget password
export const forgotPasswordAction = createAsyncThunk(
  "forgotPasswordAction",
  async (credentials) => {
    // console.log("2.signup data in async reducer", credentials);
    const response = await apiAuthService.forgotPassword(credentials);
    // console.log("5.data after recieving response in async", response);
    return response;
  }
);
