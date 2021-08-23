import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import {
  AuthState,
  SignInResponse,
  SignUpResponse,
} from "./types";
import {
  signInThunk,
  signUpThunk,
} from "../../modules/authorization/authorizationThunk";

const initialState: AuthState = {
  user: null,
  authenticated: false,
  error: "",
  sessionToken: null,
};

export const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    signOut: (
      state: AuthState,
      action: PayloadAction
    ): AuthState => ({
      ...state,
      user: null,
      authenticated: false,
    }),
    clearError: (
      state: AuthState,
      action: PayloadAction
    ): AuthState => ({
      ...state,
      error: null,
    }),
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(
      signInThunk.fulfilled,
      (state: AuthState, action: PayloadAction<SignInResponse>) => ({
        ...state,
        authenticated: true,
        sessionToken: action.payload.token,
      })
    );
    builder.addCase(
      signInThunk.rejected,
      (state: AuthState, action: PayloadAction<unknown>) => ({
        ...state,
        error: "Could not sign in",
      })
    );
    builder.addCase(
      signUpThunk.fulfilled,
      (state: AuthState, action: PayloadAction<SignUpResponse>) => ({
        ...state,
        authenticated: true,
        sessionToken: action.payload.token,
      })
    );
    builder.addCase(
      signUpThunk.rejected,
      (state: AuthState, action: PayloadAction<unknown>) => ({
        ...state,
        error: "Could not sign up",
      })
    );
  },
});

export const { signOut, clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
