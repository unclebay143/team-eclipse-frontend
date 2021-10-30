import { GET_ALL_PETITIONS } from '../actions/petition.actions';

const INITIAL_STATE = {};

// redux reducer function
const petitionReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PETITIONS:
      return {
        ...state,
        petitions: { payload },
      };
    case CREATE_PETITION:
      return {
        ...state,
        petitions: petitions.concat(payload),
      };
    case UPDATE_PETITION_STATUS:
      return {
        ...state,
        petitions: petitions.map((petition) =>
          petition.id === payload.id ? payload : petition
        ),
      };

    default:
      return state;
  }
};

export default petitionReducer;
