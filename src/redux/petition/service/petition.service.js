// React
import axios from 'axios';
import axiosInstance from '../../../axios';
import { BASE_URL } from '../../user/service/root-endpoints';
import {
  FETCH_PETITIONS_URL,
  CREATE_PETITION_URL,
  UPDATE_PETITION_STATUS_URL,
  FETCH_PETITION_BY_ID_URL,
} from './petition.endpoint';

const fetchAllPetitions = async () => {
  try {
    const res = await axios.get(BASE_URL + FETCH_PETITIONS_URL);
    return res;
  } catch (error) {
    return error;
  }
};

const addPetition = async (formValues) => {
  try {
    const res = await axios.post(BASE_URL + CREATE_PETITION_URL, formValues);
    return res;
  } catch (error) {
    return error;
  }
};

const fetchPetitionByID = async (id) => {
  try {
    const res = await axios.get(FETCH_PETITION_BY_ID_URL);
    return res;
  } catch (error) {
    return error;
  }
};

const updatePetitionStatus = async (status, id) => {
  const payload = { status, id };
  try {
    const res = await axios.get(UPDATE_PETITION_STATUS_URL, payload);
    return res;
  } catch (error) {
    return error;
  }
};

// Export petition services as PetitionService object
const PetitionService = {
  addPetition,
  fetchAllPetitions,
  updatePetitionStatus,
  fetchPetitionByID,
};

export default PetitionService;
