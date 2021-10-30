import {
  SET_SCREEN_MESSAGE,
  CLEAR_SCREEN_MESSAGE,
  REGISTRATION_SUCCESSFUL,
  LOGIN_SUCCESSFULL,
  USER_LOADED,
  PLAYER_GAME_RECORD_LOADED,
  LOGOUT,
  CLEAR_NOTIFICATION,
  SET_NOTIFICATION,
} from "./../../types/index";

const INITIAL_STATE = {
  user: null,
  notification: null,
  gameRecord: null,
  screenMessage: {
    message: null,
    type: null,
  },
  isLoggedIn: false,
};

// redux reducer function
const userReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;

  switch (type) {
    case SET_SCREEN_MESSAGE: // Handles all NOTIFICATIONS, i.e no need for registration/login error cases
      return {
        ...state,
        screenMessage: {
          message: payload.message,
          type: payload.type,
        },
      };
    case CLEAR_SCREEN_MESSAGE: // Clear all error
      return {
        ...state,
        screenMessage: {
          message: null,
          type: null,
        },
      };
    case REGISTRATION_SUCCESSFUL:
      return {
        ...state,
      };
    case LOGIN_SUCCESSFULL:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    case PLAYER_GAME_RECORD_LOADED:
      return {
        ...state,
        gameRecord: payload,
      };

    case SET_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: null,
      };

    case LOGOUT:
      return {
        user: null,
        gameRecord: null,
        screenMessage: {
          message: null,
          type: null,
        },
        isLoggedIn: false,
      };

    default:
      // return the state by default else react will shout
      return state;
  }
};

export default userReducer;
