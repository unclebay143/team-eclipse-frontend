import axios from 'axios';
import { BASE_URL } from '../../user/service/root-endpoints';
import {
  AGENCY_CLAIM_PETITION,
  AGENCY_LOGIN_URL,
  AGENCY_REGISTER_NEW_AGENCY,
  LOAD_AGENCY_PROFILE_WITH_TOKEN_URL,
} from './agency.endpoint';

const loginAgency = async (loginDetails) => {
  try {
    const response = await axios.post(
      BASE_URL + AGENCY_LOGIN_URL,
      loginDetails
    );
    return response;
  } catch (error) {
    return error;
  }
};

const loadAgencyProfile = async (token) => {
  try {
    const response = await axios.post(
      BASE_URL + LOAD_AGENCY_PROFILE_WITH_TOKEN_URL,
      token
    );

    return response;
  } catch (error) {
    return error;
  }
};

const agencyRegisterAgency = async ({ agencyName, email, phoneNumber }) => {
  try {
    const payload = {
      agencyName,
      email,
      phoneNumber,
    };
    const agencyToken = localStorage.getItem('jwt_agency');
    //
    const response = await axios.post(
      BASE_URL + AGENCY_REGISTER_NEW_AGENCY,
      payload,
      { headers: { Authorization: `Bearer ${agencyToken}` } }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const agencyClaimPetition = (claimDetails) => {
  try {
    return axios.post(BASE_URL + AGENCY_CLAIM_PETITION, claimDetails);
  } catch (error) {
    return error;
  }
};

const AgencyService = {
  loginAgency,
  loadAgencyProfile,
  agencyRegisterAgency,
  agencyClaimPetition,
};

export default AgencyService;
