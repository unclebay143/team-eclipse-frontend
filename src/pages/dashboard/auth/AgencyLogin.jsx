import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AgencyLoginSchema } from '../../../components/helper/validation/yupFormValidation';
import { agencyLogin } from '../../../redux/agency/actions/agency.actions';
import styles from './auth-form.module.css';

export const AgencyLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const isAgencyToken = localStorage.getItem('jwt_agency');
    // if (isAgencyToken) {
    //   history.push('/agency');
    // } else {
    //   history.push('/agency_login');
    // }
  }, []);
  return (
    <React.Fragment>
      <div className={`container-fluid row pt-5 pb-5 ${styles.formContainer}`}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={AgencyLoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(agencyLogin(values))
              .then((response) => {
                console.log(response);
                history.push('/agency');
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
                <h2 className={styles.heading}>Agency login portal</h2>
                <div className="form-group mt-4">
                  <p className="mb- text-secondary">
                    Welcome back, enter the email address and password assigned
                    to your agency.
                  </p>
                  <label className="mb-2 text-secondary" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-danger small">{errors.email}</div>
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
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-danger small">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <button
                    disabled={isSubmitting}
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
