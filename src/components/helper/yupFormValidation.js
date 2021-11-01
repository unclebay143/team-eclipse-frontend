import * as Yup from 'yup';

// PETITIONS

export const NewPetitionSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title is too short')
    .max(30, 'Title is too long')
    .required('Title is required'),
  type: Yup.string().required('Type is required'),
  description1: Yup.string()
    .min(15, 'Description is too short')
    .max(500, 'Description is too long')
    .required('Description is required'),
  description2: Yup.string()
    .min(15, 'Description is too short')
    .max(500, 'Description is too long'),
  confirmation: Yup.boolean().oneOf([true], 'Please Confirm'),
});

// AGENCY

export const AgencyRegistrationSchema = Yup.object().shape({
  agencyName: Yup.string().required('Agency Name cannot be blank'),
  email: Yup.string().email().required('Agency Email is required'),
  phoneNumber: Yup.number().required('Agency Phone Number is required'),
  confirmation: Yup.boolean().oneOf([true], 'Please Confirm'),
});

export const AgencyLoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password cannot be empty'),
});

export const AgentSignupSchema = Yup.object().shape({
  agencyName: Yup.string().required('Agency Name cannot be blank'),
  email: Yup.string().email().required('Agency Email is required'),
  password: Yup.string().required('Pasword is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
    .required('Please confirm password'),
  confirmation: Yup.boolean().oneOf([true], 'Please Confirm'),
});

// ADMIN
export const AdminRegistrationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(5, 'Password too short')
    .required('Password cannot be empty'),
  confirmation: Yup.boolean().oneOf([true], 'Please Confirm'),
});

export const AdminLoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password cannot be empty'),
});

// HALL OF SHAME
export const NewHallOfShameSchema = Yup.object().shape({
  fullName: Yup.string().min(3).max(50).required('Full Name is required'),
  crime: Yup.string().min(15).max(500).required('Crime cannot be blank'),
  consequence: Yup.string().min(3).max(150).required('Consequence is required'),
  gender: Yup.string().required('Gender is required'),
  confirmation: Yup.boolean().oneOf([true], 'Please Confirm'),
});
