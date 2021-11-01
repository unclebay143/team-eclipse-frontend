import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { NewHallOfShameSchema } from '../../../../../components/helper/yupFormValidation';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const HallOfShameForm = () => {
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
            fullName: '',
            crime: '',
            consequence: '',
            gender: '',
            confirmation: false,
          }}
          validationSchema={NewHallOfShameSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              className="col-12 col-md-9 col-xl-8 m-auto overflow-auto"
            >
              <div className="pb-1">
                <h2 className="text-primary h3">Hall of Shame Form</h2>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="fullName"
                    name="fullName"
                    onChange={handleChange}
                  />
                  {touched.fullName && errors.fullName ? (
                    <div className="text-danger small">{errors.fullName}</div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="email">
                    Crime
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="crime"
                    name="crime"
                    onChange={handleChange}
                  />
                  {touched.crime && errors.crime ? (
                    <div className="text-danger small">{errors.crime}</div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="consequence">
                    Consequence
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="consequence"
                    name="consequence"
                    onChange={handleChange}
                  />
                  {touched.consequence && errors.consequence ? (
                    <div className="text-danger small">
                      {errors.consequence}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="gender">
                    Gender
                  </label>
                  <Field
                    as="select"
                    className="form-control form-control-lg text-secondary fs-6"
                    name="gender"
                  >
                    <option value="">Select a Selection</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Field>
                  {touched.gender && errors.gender ? (
                    <div className="text-danger small">{errors.gender}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <input
                    type="checkbox"
                    id="confirmation"
                    name="confirmation"
                    onChange={handleChange}
                  />{' '}
                  <label
                    className="text custom-primary-color-danger"
                    for="confirmation"
                  >
                    I have confirmed the details above
                  </label>
                  {touched.confirmation && errors.confirmation ? (
                    <div className="text-danger small">
                      {errors.confirmation}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <button
                    className={`form-control form-control-lg btn btn-lg btn-primary`}
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
