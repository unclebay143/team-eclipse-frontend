import { Formik } from 'formik';
import React from 'react';
import styles from './track-petition.module.css';
import universalStyles from './../../../components/styles/universal.module.css';

export const TrackPetition = () => {
  return (
    <React.Fragment>
      <div className={`container mt-5 ${styles.petitionFormContainer}`}>
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
            <form>
              <section className="section-1">
                <div className="text-center pb-1 w-lg-50 m-auto">
                  <h2>PETITION TRACKER</h2>
                  <div className="form-group mt-4">
                    <label className="mb-2" htmlFor="exampleFormControlInput1">
                      Enter Reference ID
                    </label>
                    <input
                      type="text"
                      className="form-control w-50 m-auto"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group mt-2">
                    <button
                      className={`form-control btn btn-primary w-50 m-auto ${universalStyles.bgPrimaryColor}`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </section>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
