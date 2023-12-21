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
    const response = await ApiAuthService.login(credentials);
    return response;
  }
);
