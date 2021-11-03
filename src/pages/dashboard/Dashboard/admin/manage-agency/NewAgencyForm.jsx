import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { AgencyRegistrationSchema } from '../../../../../components/helper/validation/yupFormValidation';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const NewAgencyForm = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadtime = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => {
      clearTimeout(loadtime);
    };
  }, []);

  if (loading) return <DashboardComponentLoader />;
  return (
    <React.Fragment>
      <div
        className={`container row w-100 py-5 overflow-auto`}
        style={{ maxHeight: '80vh' }}
      >
        <Formik
          initialValues={{
            agencyName: '',
            email: '',
            phoneNumber: '',
            confirmation: false,
          }}
          validationSchema={AgencyRegistrationSchema}
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
            <form
              onSubmit={handleSubmit}
              className="col-12 col-md-9 col-xl-8 m-auto overflow-auto"
            >
              <div className="pb-1">
                <h2 className="text-primary h3">Agency Registration Form</h2>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="agencyName">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="agencyName"
                    name="agencyName"
                    onChange={handleChange}
                  />
                  {touched.agencyName && errors.agencyName ? (
                    <div className="text-danger small">{errors.agencyName}</div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="email">
                    Agency Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-danger small">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="phoneNumber">
                    Agency Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <div className="text-danger small">
                      {errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
                {/* <div className="form-group mt-4">
                  <label
                    className="mb-2 text-secondary"
                    htmlFor="exampleFormControlInput1"
                  >
                    Agency Office Address
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
                </div> */}
                <div className="form-group mt-4">
                  <Field
                    type="checkbox"
                    id="confirmation"
                    name="confirmation"
                  />{' '}
                  <label
                    className="text custom-primary-color-danger"
                    for="confirmation"
                  >
                    I have confirmed the agency information above
                  </label>
                  {touched.confirmation && errors.confirmation ? (
                    <div className="text-danger small">
                      {errors.confirmation}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <button
                    disabled={isSubmitting}
                    className={`form-control form-control-lg btn btn-lg btn-primary  `}
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
                      'Register'
                    )}
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
