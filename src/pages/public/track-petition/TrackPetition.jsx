import { Formik } from 'formik';
import React from 'react';
import styles from './track-petition.module.css';
import universalStyles from './../../../components/styles/universal.module.css';
import { useDispatch } from 'react-redux';
import { getPetitionStatus } from '../../../redux/petition/actions/petition.actions';

export const TrackPetition = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className={`container mt-5 ${styles.petitionFormContainer}`}>
        <Formik
          initialValues={{ petitionId: '' }}
          // validate={}
          onSubmit={(values) => {
            dispatch(getPetitionStatus(values.petitionId));
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
            <form onSubmit={handleSubmit}>
              <section className="section-1 col-12 col-lg-6 m-auto">
                <div className="text-center pb-1 w-lg-50 m-auto">
                  <h2>PETITION TRACKER</h2>
                  <div className="form-group mt-4">
                    <label className="mb-2" htmlFor="petitionId">
                      Enter Reference ID
                    </label>
                    <input
                      type="text"
                      className="form-control m-auto"
                      id="petitionId"
                      name="petitionId"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <button
                      className={`form-control btn btn-primary m-auto ${universalStyles.bgPrimaryColor}`}
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
