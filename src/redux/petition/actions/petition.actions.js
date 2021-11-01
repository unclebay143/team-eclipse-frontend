import PetitionService from '../service/petition.service';

export const GET_ALL_PETITIONS = 'GET_ALL_PETITIONS';
export const getAllPetitions = () => (dispatch) => {
  PetitionService.fetchAllPetitions()
    .then((response) => {
      // dispatch
      console.log(response);
    })
    .catch((error) => {
      //   dispatch error
      console.log(error);
    });
};

export const CREATE_PETITION = 'CREATE_PETITION';
export const createPetition = (formValues, setSubmitting) => (dispatch) => {
  console.log(formValues);
  console.log(setSubmitting);
  PetitionService.addPetition(formValues)
    .then((response) => {
      //   dispatch response and handle submitting
      setSubmitting(false);
    })
    .catch((error) => {
      setSubmitting(false);

      // dispatch error
    });
};

export const UPDATE_PETITION_STATUS = 'UPDATE_PETITION';
export const updatePetitionStatus = (status, id) => (dispatch) => {
  PetitionService.updatePetitionStatus(status, id)
    .then((response) => {
      // dispatch
    })
    .catch((error) => {
      //   dispatch error
    });
};

export const GET_PETITION_BY_ID = 'GET_PETITION_BY_ID';
export const getPetitionById = (id) => (dispatch) => {
  PetitionService.fetchPetitionByID(id)
    .then((response) => {
      // dispatch
    })
    .catch((error) => {
      // dispatch
    });
};
