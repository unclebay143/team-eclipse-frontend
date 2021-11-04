import {
  AGENCY_LOGIN_SUCCESSFUL,
  REFRESH_AGENCY_TOKEN,
} from '../actions/agency.actions';

const INITIAL_STATE = {
  currentAgency: {},
  isAgencyLoggedIn: false,
};

// redux reducer function
const agencyReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;
  switch (type) {
    case AGENCY_LOGIN_SUCCESSFUL:
      return {
        ...state,
        currentAgency: payload,
        isAgencyLoggedIn: true,
      };
    case REFRESH_AGENCY_TOKEN:
      return {
        ...state,
        currentAgency: payload,
        isAgencyLoggedIn: true,
      };
    default:
      return state;
  }
};

export default agencyReducer;
