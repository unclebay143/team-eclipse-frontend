import {
  ADMIN_LOGIN_SUCCESSFUL,
  REFRESH_TOKEN,
} from '../actions/admin.actions';

const INITIAL_STATE = {
  currentAdmin: {},
  isAdminLoggedIn: false,
};

// redux reducer function
const adminReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGIN_SUCCESSFUL:
      return {
        ...state,
        currentAdmin: payload,
        isAdminLoggedIn: true,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        currentAdmin: payload,
        isAdminLoggedIn: true,
      };
    default:
      return state;
  }
};

export default adminReducer;
