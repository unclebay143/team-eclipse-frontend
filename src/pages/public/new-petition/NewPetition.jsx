import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import styles from './new-petition.module.css';
import { NewPetitionSchema } from '../../../components/helper/yupFormValidation';
import { createPetition } from '../../../redux/petition/actions/petition.actions';

export const NewPetition = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className={`container mt-5 ${styles.petitionFormContainer}`}>
        <Formik
          initialValues={{
            title: '',
            type: '',
            description1: '',
            description2: '',
            document: '',
            preferredAgency: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(createPetition(values, setSubmitting));
          }}
          validationSchema={NewPetitionSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <section className="section-1">
                <div className="text-center pb-1 w-lg-50 m-auto">
                  <h2 className="custom-primary-color">SECTION A</h2>
                  <h5 className="mb-3 custom-primary-color">
                    (Non-Sensitive information)
                  </h5>
                  <p className="text-warning">
                    Please Only fill non-sensitive information in this section,
                    as this will be visible to the public. Information like
                    suspect real name, home address and phone number should not
                    be filled in this section, else your petition will be
                    hidden.
                  </p>
                </div>
                <div className="form-group mt-4">
                  <label className="mb-2 custom-primary-color" htmlFor="title">
                    Report Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    placeholder=""
                  />
                  {touched.title && errors.title ? (
                    <div className="text-danger small">{errors.title}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="preferredAgency"
                  >
                    Select preferred agency (optional)
                  </label>
                  <select
                    className="form-control ustom-select"
                    id="preferredAgency"
                    onChange={handleChange}
                  >
                    <option value="" selected>
                      Select option
                    </option>
                    <option value="efcc">EFCC</option>
                    <option value="police">POLICE</option>
                    <option value="dss">DSS</option>
                  </select>
                  {touched.preferredAgency && errors.preferredAgency ? (
                    <div className="text-danger small">
                      {errors.preferredAgency}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="description1"
                  >
                    Report Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description1"
                    name="description1"
                    onChange={handleChange}
                    rows={3}
                    defaultValue={''}
                  />
                  {touched.description1 && errors.description1 ? (
                    <div className="text-danger small">
                      {errors.description1}
                    </div>
                  ) : null}
                </div>
              </section>

              {/* SECTION 2 */}
              <section className="section-2 mt-5">
                <div className="text-center pb-1 w-lg-50 m-auto">
                  <h2 className="custom-primary-color">SECTION B</h2>
                  <h5 className="mb-3 custom-primary-color">
                    (Sensitive information)
                  </h5>
                  <p className="text-primary">
                    Please provide more detailed information about your report,
                    this can include informations like suspect real name, home
                    address, phone number and other vital information.
                  </p>
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="reportType"
                  >
                    Report Type
                  </label>
                  <select
                    className="form-control"
                    id="reportType"
                    name="type"
                    onChange={handleChange}
                  >
                    <option value="" selected>
                      Select option
                    </option>
                    <option>Robbery</option>
                    <option>Fraud</option>
                    <option>Looting</option>
                  </select>
                  {touched.type && errors.type ? (
                    <div className="text-danger small">{errors.type}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="document"
                  >
                    Supporting Document
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="document"
                    name="document"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="description2"
                  >
                    Sensitive Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description2"
                    name="description2"
                    onChange={handleChange}
                    rows={3}
                    defaultValue={''}
                  />
                  {touched.description2 && errors.description2 ? (
                    <div className="text-danger small">
                      {errors.description2}
                    </div>
                  ) : null}
                </div>
              </section>
              <div className="form-group mt-4">
                <input type="checkbox" id="confirmation" />{' '}
                <label
                  onChange={handleChange}
                  className="text custom-primary-color-danger"
                  for="confirmation"
                >
                  I confirm the information above are true to the best of my
                  knownledge
                </label>
              </div>
              <div className="form-group mt-4">
                <button className="btn btn-danger" disabled={isSubmitting}>
                  {isSubmitting ? 'Please wait...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
