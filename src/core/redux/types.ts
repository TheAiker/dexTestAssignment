export const SIGN_OUT = "SIGN_OUT";
export const SET_ERROR = "SET_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";

export interface User {
    userName: string;
    login: String;
    id: string;
    createdAt: any;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    error: string;
    sessionToken: string | null;
    success: string;
}

export interface SignUpResponse {
    name: string;
    avatarUrl: string;
    token: string;
}

export interface SignInResponse {
    name: string;
    avatarUrl: string;
    token: string;
}

export interface SignUpData {
    userName: string;
    login: string;
    password: string;
}

export interface SignInData {
    login: string;
    password: string;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS;
    payload: string;
}

interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS;
    payload: string;
}


export type AuthAction = SignOutAction | SetErrorAction | SignInSuccessAction | SignUpSuccessAction;