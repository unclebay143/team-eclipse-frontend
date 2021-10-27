import React from 'react';
import { Formik } from 'formik';
import styles from './new-petition.module.css';

export const NewPetition = () => {
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
                  <h2 className="custom-primary-color">SECTION A</h2>
                  <h5 className="mb-3 custom-primary-color">
                    (Non-Sensitive information)
                  </h5>
                  <p className="text-warning">
                    Only fill non-sensitive information in this section, as this
                    will be visible to the public. Information like suspect real
                    name, home address and phone number should not be filled in
                    this section, else your petition will be void
                  </p>
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlInput1"
                  >
                    Report title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlSelect1"
                  >
                    Select preferred agency (optional)
                  </label>
                  <select
                    className="form-control ustom-select"
                    id="exampleFormControlSelect1"
                  >
                    <option selected>Select option</option>
                    <option value={1}>EFCC</option>
                    <option value={2}>POLICE</option>
                    <option value={3}>DSS</option>
                  </select>
                </div>

                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Short Description of the report
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={''}
                  />
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
                    Provide more detailed information about your report, this
                    can include informations like address, phone number and
                    other vital information.
                  </p>
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlSelect1"
                  >
                    Select Crime Type
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option selected>Select option</option>
                    <option>Robbery</option>
                    <option>Fraud</option>
                    <option>Looting</option>
                    <option>Looting</option>
                    <option>Looting</option>
                  </select>
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlInput1"
                  >
                    Exhibit
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 custom-primary-color"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    More information
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={''}
                  />
                </div>
              </section>
              <div className="form-group mt-4">
                <input type="checkbox" id="confirmation" />{' '}
                <label
                  className="text custom-primary-color-danger"
                  for="confirmation"
                >
                  I confirm the information above are true to the best of my
                  knownledge
                </label>
              </div>
              <div className="form-group mt-4">
                <button className="btn btn-danger">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
