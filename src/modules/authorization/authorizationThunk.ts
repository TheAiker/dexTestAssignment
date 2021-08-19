import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SignInData, SignInResponse, SignUpData, SignUpResponse } from "../../core/redux/types";

export const signInThunk = createAsyncThunk(
  "auth/signInStatus",
  async (data: SignInData, thunkAPI) => {
    const response = await axios.post<SignInResponse>(
      "http://dev.trainee.dex-it.ru/api/Auth/SignIn",
      {
        login: data.login,
        password: data.password,
      }
    );
    return response.data;
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signUpStatus",
  async (data: SignUpData, thunkAPI) => {
    const response = await axios.post<SignUpResponse>(
      "http://dev.trainee.dex-it.ru/api/Auth/SignUp",
      {
        userName: data.userName,
        login: data.login,
        password: data.password,
      }
    );
    return response.data;
  }
);
