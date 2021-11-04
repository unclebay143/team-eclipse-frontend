import axios from 'axios';
import { BASE_URL } from '../../user/service/root-endpoints';
import {
  ADMIN_LOGIN_URL,
  ADMIN_REGISTER_NEW_AGENCY,
  LOAD_PROFILE_WITH_TOKEN_URL,
} from './admin.endpoint';

const loginAdmin = async (loginDetails) => {
  try {
    const response = await axios.post(BASE_URL + ADMIN_LOGIN_URL, loginDetails);
    return response;
  } catch (error) {
    return error;
  }
};

const loadAdminProfile = async (token) => {
  try {
    const response = await axios.post(
      BASE_URL + LOAD_PROFILE_WITH_TOKEN_URL,
      token
    );

    return response;
  } catch (error) {
    return error;
  }
};

const adminRegisterAgency = async ({ agencyName, email, phoneNumber }) => {
  try {
    const payload = {
      agencyName,
      email,
      phoneNumber,
    };
    const adminToken = localStorage.getItem('jwt_admin');
    //
    const response = await axios.post(
      BASE_URL + ADMIN_REGISTER_NEW_AGENCY,
      payload,
      { headers: { Authorization: `Bearer ${adminToken}` } }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const AdminService = {
  loginAdmin,
  loadAdminProfile,
  adminRegisterAgency,
};

export default AdminService;
