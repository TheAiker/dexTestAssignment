import { AuthAction, AuthState, SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SET_ERROR, SIGN_OUT } from './types';

const initialState: AuthState = {
    user: null,
    authenticated: false,
    error: '',
    sessionToken: null,
    success: ''
}

export const authReducer = (state = initialState, action: AuthAction) => {
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                sessionToken: action.payload
            }
        case SIGN_OUT: 
            return {
                ...state,
                user: null,
                authenticated: false,
                loading: false
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload   
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                authenticated: true,
                sessionToken: action.payload
            }
        default:
            return state
    }
}