import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, VERIFY_REQUEST, VERIFY_SUCCESS } from "../actions";

export const AuthReducer = (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: null,
    logoutError: false,
    isAuthenticated: false,
    user: {}
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, loginError: false };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginError: false,
        isAuthenticated: true,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: action.error
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case VERIFY_REQUEST:
      return { ...state, isVerifying: true };
    case VERIFY_SUCCESS:
      return { ...state, isVerifying: false };
    default:
      return state;
  }
};
