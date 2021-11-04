import {
  CREATE_PETITION,
  GET_ALL_PETITIONS,
  NEW_PETITION_STATUS,
  UPDATE_PETITION_STATUS,
} from '../actions/petition.actions';

const INITIAL_STATE = {
  newPetitionStatus: {
    petitionId: '',
    status: '',
  },
  petitions: null,
};

// redux reducer function
const petitionReducer = (state = INITIAL_STATE, action) => {
  // Destructure type and payload from action
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PETITIONS:
      return {
        ...state,
        petitions: payload,
      };
    case CREATE_PETITION:
      return {
        ...state,
        petitions: state.petitions.concat(payload),
      };
    case NEW_PETITION_STATUS:
      return {
        ...state,
        newPetitionStatus: {
          status: payload.status,
          petitionId: payload.petitionId,
        },
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
