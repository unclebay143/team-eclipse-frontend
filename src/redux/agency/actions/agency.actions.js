import AgencyService from '../service/agency.service';

export const AGENCY_LOGIN = 'AGENCY_LOGIN';
export const AGENCY_LOGIN_SUCCESSFUL = 'AGENCY_LOGIN_SUCCESSFUL';
export const agencyLogin = (loginDetails) => async (dispatch) => {
  try {
    const response = await AgencyService.loginAgency(loginDetails);
    localStorage.setItem('jwt_agency', response.data.data.token);
    loadAgencyProfileWithToken(response.data.data.token);
    return response;
  } catch (error) {
    return error;
  }
};

export const REFRESH_AGENCY_TOKEN = 'REFRESH_AGENCY_TOKEN';
export const loadAgencyProfileWithToken = (token) => async (dispatch) => {
  const payload = {
    token,
  };
  try {
    const response = await AgencyService.loadAgencyProfile(payload);
    dispatch({
      type: REFRESH_AGENCY_TOKEN,
      payload: response.data.data.data,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const agencyRegisterAgency = (formValues) => async (dispatch) => {
  try {
    return await AgencyService.agencyRegisterAgency(formValues);
  } catch (error) {
    return error;
  }
};

export const agencyClaimPetition = (claimDetails) => (dispatch) => {
  try {
    return AgencyService.agencyClaimPetition(claimDetails);
  } catch (error) {
    return error;
  }
};
