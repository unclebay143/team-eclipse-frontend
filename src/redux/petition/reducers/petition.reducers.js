import {
  CREATE_PETITION,
  GET_ALL_PETITIONS,
  UPDATE_PETITION_STATUS,
} from '../actions/petition.actions';

const INITIAL_STATE = {
  petitions: [],
};

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
        petitions: state.petitions.concat(payload),
      };
    case UPDATE_PETITION_STATUS:
      return {
        ...state,
        petitions: state.petitions.map((petition) =>
          petition.id === payload.id ? payload : petition
        ),
      };

    default:
      return state;
  }
};

export default petitionReducer;
