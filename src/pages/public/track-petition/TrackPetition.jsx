import { Formik } from 'formik';
import React, { useState } from 'react';
import styles from './track-petition.module.css';
import universalStyles from './../../../components/styles/universal.module.css';
import { useDispatch } from 'react-redux';
import { getPetitionStatus } from '../../../redux/petition/actions/petition.actions';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export const TrackPetition = () => {
  const dispatch = useDispatch();
  const [petition, setPetition] = useState(null);
  console.log(petition);
  console.log(petition);
  return (
    <React.Fragment>
      <div className={`container mt-5 ${styles.petitionFormContainer}`}>
        <Formik
          initialValues={{ petitionId: '' }}
          validate={(values) => {
            const errors = {};
            if (values.petitionId.length < 5) {
              errors.petitionId = 'Invalid Petition Id';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(getPetitionStatus(values.petitionId))
              .then((response) => {
                setPetition(response.data.data);
                setSubmitting(false);
              })
              .catch((error) => {
                setSubmitting(false);
              });
          }}
        >
          {({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
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
                      className="form-control"
                      id="petitionId"
                      name="petitionId"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <button
                      className={`btn form-control form-control-lg ${universalStyles.bgPrimaryColor}`}
                    >
                      {isSubmitting ? (
                        <React.Fragment>
                          Please wait...{' '}
                          <Loader
                            type="TailSpin"
                            color="#fff"
                            height={20}
                            width={20}
                            style={{ display: 'inline-block' }}
                          />
                        </React.Fragment>
                      ) : (
                        'Submit  '
                      )}
                    </button>
                  </div>
                </div>
                {touched.petitionId && errors.petitionId ? (
                  <div className="text-danger small">{errors.petitionId}</div>
                ) : null}
              </section>
            </form>
          )}
        </Formik>

        {petition && (
          <section className="mt-5 text-center section-2 col-12 col-lg-6 m-auto">
            <p>
              Viewing Petition Status: <code>{petition.caseId}</code>
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Agency</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{petition.title}</td>
                  <td>{petition.type}</td>
                  <td>{petition.status}</td>
                  <td>{petition.status === 'open' ? 'N/A' : 'EFCC'}</td>
                  <td>
                    <Link to={`/petition/${petition.caseId}`}>View</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};
