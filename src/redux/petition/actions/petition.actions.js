import PetitionService from '../service/petition.service';

export const GET_ALL_PETITIONS = 'GET_ALL_PETITIONS';
export const getAllPetitions = () => (dispatch) => {
  PetitionService.fetchAllPetitions()
    .then((response) => {
      const petitions = response.data.data;
      dispatch({
        type: GET_ALL_PETITIONS,
        payload: petitions,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const CREATE_PETITION = 'CREATE_PETITION';
export const NEW_PETITION_STATUS = 'NEW_PETITION_STATUS';
export const createPetition = (formValues) => (dispatch) => {
  return PetitionService.addPetition(formValues)
    .then((response) => {
      console.log(response);
      dispatch({
        type: NEW_PETITION_STATUS,
        payload: { status: 'success', petitionId: response.data.data },
      });
      return response;
    })
    .catch((error) => {
      dispatch({
        type: NEW_PETITION_STATUS,
        payload: { status: 'failed', petitionId: '' },
      });
      return error;
    });
};

export const UPDATE_PETITION_STATUS = 'UPDATE_PETITION';
export const updatePetitionStatus = (status, id) => (dispatch) => {
  console.log('id', id);

  PetitionService.updatePetitionStatus(status, id)
    .then((response) => {
      // dispatch
    })
    .catch((error) => {
      //   dispatch error
    });
};

export const GET_PETITION_BY_ID = 'GET_PETITION_BY_ID';
export const getPetitionStatus = (id) => (dispatch) => {
  return PetitionService.fetchPetitionStatus(id)
    .then((response) => {
      // dispatch
      return response;
    })
    .catch((error) => {
      // dispatch
      return error;
    });
};
