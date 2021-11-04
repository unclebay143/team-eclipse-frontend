// React
import axios from 'axios';
import axiosInstance from '../../../axios';
import { BASE_URL } from '../../user/service/root-endpoints';
import {
  FETCH_PETITIONS_URL,
  CREATE_PETITION_URL,
  UPDATE_PETITION_STATUS_URL,
  PETITION_PUBLIC_STATUS_URL,
} from './petition.endpoint';

const fetchAllPetitions = async () => {
  try {
    const res = await axios.get(BASE_URL + FETCH_PETITIONS_URL);
    return res;
  } catch (error) {
    return error;
  }
};

const addPetition = async ({
  title,
  type,
  description1,
  description2,
  preferredAgency,
  supportingDocuments,
}) => {
  const payload = {
    title,
    type,
    description1,
    description2,
    preferredAgency,
    supportingDocuments,
  };
  try {
    const res = await axios.post(BASE_URL + CREATE_PETITION_URL, payload);
    return res;
  } catch (error) {
    return error;
  }
};

const fetchPetitionStatus = async (id) => {
  try {
    const res = await axios.get(BASE_URL + PETITION_PUBLIC_STATUS_URL + id);
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
  fetchPetitionStatus,
};

export default PetitionService;
