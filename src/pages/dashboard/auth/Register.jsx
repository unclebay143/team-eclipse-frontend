import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-form.module.css';

export const Register = () => {
  return (
    <React.Fragment>
      <div className={`row pt-5 pb-5 ${styles.formContainer}`}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="d-flex justify-content-center align-items-center col-10 col-md-6 col-xl-4 m-auto">
              <div className="pb-1">
                <h2 className={styles.heading}>Agency registration portal</h2>
                <div className="form-group mt-4">
                  <p
                    className="mb- text-secondary"
                    htmlFor="exampleFormControlInput1"
                  >
                    Enter a valid agency email address with a strong and secure
                    password. Already have an account?{' '}
                    <Link to="/login">Login here.</Link>
                  </p>
                  <label
                    className="mb-2 text-secondary"
                    htmlFor="exampleFormControlInput1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 text-secondary"
                    htmlFor="exampleFormControlInput1"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-4">
                  <button
                    className={`form-control form-control-lg btn btn-lg btn-primary  `}
                  >
                    Register
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
