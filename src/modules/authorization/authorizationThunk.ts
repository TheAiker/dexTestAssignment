import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInData, SignInResponse, SignUpData, SignUpResponse } from "../../core/redux/types";
import { baseRequest } from '../../components/api/baseRequest';
import { signupIn, signupPath } from "../../components/api/constants";

interface ILoginData {
  login: string;
  password: string;
}

interface ISignupData {
  userName: string,
  login: string,
  password: string,
}

export const signInThunk = createAsyncThunk(
  "auth/signInStatus",
  async (data: SignInData) => {
    return await baseRequest<ILoginData,SignInResponse>(
      'POST',
      signupIn,
      {
        login: data.login,
        password: data.password,
      }
    );
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signUpStatus",
  async (data: SignUpData) => {
    return await baseRequest<ISignupData, SignUpResponse>(
      'POST',
      signupPath,
      {
        userName: data.userName,
        login: data.login,
        password: data.password,
      }
    );
  }
);
