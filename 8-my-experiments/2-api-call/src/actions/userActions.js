import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from "./actionTypes";

export const userLoginRequest = (email, password) => {
    const action = {
        type: USER_LOGIN_REQUEST,
        isAuthenticating: true
    };
    console.log('User is being logged in:', action);
    return action;
};

export const userLoginSuccess = (session) => {
    const action = {
        type: USER_LOGIN_SUCCESS,
        isAuthenticating: false,
        user: session.user,
        token: session.token
    }
    console.log('Session is created:', action);
    return action;
};

export const fetchFeedFailure = (error) => {
    const action = {
        type: USER_LOGIN_FAILURE,
        isFetching: false,
        error,
    }
    console.log('Error occurred during login:', action);
    return action;
};