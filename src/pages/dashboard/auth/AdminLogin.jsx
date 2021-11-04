import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AdminLoginSchema } from '../../../components/helper/validation/yupFormValidation';
import { adminLogin } from '../../../redux/admin/actions/admin.actions';
import styles from './auth-form.module.css';

export const AdminLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const isToken = localStorage.getItem('jwt_admin');
    // if (isToken) {
    //   history.push('/admin');
    // }
    // else {
    //   history.push('/admin_login');
    // }
  }, []);
  return (
    <React.Fragment>
      <div className={`container-fluid row pt-5 pb-5 ${styles.formContainer}`}>
        <Formik
          initialValues={{ userName: '', password: '' }}
          validationSchema={AdminLoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(adminLogin(values))
              .then((response) => {
                console.log(response);
                history.push('/admin');
                setSubmitting(false);
              })
              .catch((error) => {
                setSubmitting(false);
                console.log(error);
              });
          }}
        >
          {({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center col-12 col-md-6 col-xl-4 m-auto"
            >
              <div className="pb-1">
                <h2 className={styles.heading}>Admin login portal</h2>
                <div className="form-group mt-4">
                  <p className="mb- text-secondary">
                    Enter a valid admin login authentication credentials, kindly
                    reach out to the super admin if you forget your password.
                  </p>
                  <label className="mb-2 text-secondary" htmlFor="userName">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="userName"
                    name="userName"
                    placeholder="Enter username"
                    // autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.userName && errors.userName ? (
                    <div className="text-danger small">{errors.userName}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="password"
                    placeholder="Enter password"
                    // autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-danger small">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`form-control form-control-lg btn btn-lg btn-primary  `}
                  >
                    {isSubmitting ? 'Please wait...' : 'Login'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
