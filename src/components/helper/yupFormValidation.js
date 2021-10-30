import * as Yup from 'yup';

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
});
