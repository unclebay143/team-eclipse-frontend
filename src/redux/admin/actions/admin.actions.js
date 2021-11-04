import AdminService from '../service/admin.service';

export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const ADMIN_LOGIN_SUCCESSFUL = 'ADMIN_LOGIN_SUCCESSFUL';
export const adminLogin = (loginDetails) => async (dispatch) => {
  try {
    const response = await AdminService.loginAdmin(loginDetails);
    localStorage.setItem('jwt_admin', response.data.data.token);
    loadAdminProfileWithToken(response.data.data.token);
    return response;
  } catch (error) {
    return error;
  }
};

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const loadAdminProfileWithToken = (token) => async (dispatch) => {
  const payload = {
    token,
  };
  try {
    const response = await AdminService.loadAdminProfile(payload);
    dispatch({
      type: REFRESH_TOKEN,
      payload: response.data.data,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const adminRegisterAgency = (formValues) => async (dispatch) => {
  try {
    return await AdminService.adminRegisterAgency(formValues);
  } catch (error) {
    return error;
  }
};
