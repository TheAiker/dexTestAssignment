import { ThunkAction } from "redux-thunk";

import { SignUpData, AuthAction, SIGN_UP_SUCCESS, SIGN_OUT, SignInData, SET_ERROR, SIGN_IN_SUCCESS, SignUpResponse, SignInResponse} from '../types';
import { RootState } from "../store";
import axios from "axios";

/**
 * sign up
 */
export const signUpAction = (data: SignUpData): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const response = await axios.post<SignUpResponse>("http://dev.trainee.dex-it.ru/api/Auth/SignUp", {
                userName: data.userName,
                login: data.login,
                password: data.password
            });
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: response.data.token
            });
            console.log(response);
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: "error at sign up"
            })
        }
    }
}

// sign out
export const signOutAction = (): ThunkAction<void,RootState, null, AuthAction> => {
    return async dispatch => {
            dispatch({
                type: SIGN_OUT
            });
    }
}

//sign in
export const signInAction = (data:SignInData): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const response = await axios.post<SignInResponse>("http://dev.trainee.dex-it.ru/api/Auth/SignIn", {
                login: data.login,
                password: data.password
            });
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: response.data.token
            });
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: "error at sign in"
            });
        }
    }
}

export const actionCreators = { 
    signIn: signInAction, 
    signOut: signOutAction, 
    signUp: signUpAction 
};