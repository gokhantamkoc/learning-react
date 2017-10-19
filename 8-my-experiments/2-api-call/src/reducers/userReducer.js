import {USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from "../actions/actionTypes";


const userLoginRequest = (action) => {
    return {
        isAuthenticating: true
    }
};

const userLoginSuccess = (action) => {
    return {
        isAuthenticating: false,
        authenticatedUser: action.payload
    }
};

const userLoginFailure = (action) => {
    return {
        isAuthenticating: false,
        error: action.error
    }
};

const userReducer = (state = [], action) => {
    let sessionState = null;
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            sessionState = [...state, userLoginRequest(action)];
            console.log('Session state: ', sessionState);
            return sessionState;
        case USER_LOGIN_SUCCESS:
            sessionState = [...state, userLoginSuccess(action)];
            console.log('Session state: ', sessionState);
            return sessionState;
        case USER_LOGIN_FAILURE:
            sessionState = [...state, userLoginFailure(action)];
            console.log('Session state: ', sessionState);
            return sessionState;
        default:
            return state;
    }
};

export default userReducer;