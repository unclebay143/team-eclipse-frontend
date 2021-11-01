import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { AgentSignupSchema } from '../../../../../components/helper/yupFormValidation';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const NewSubAgentForm = () => {
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
            password: '',
            confirmPassword: '',
            email: '',
            confirmation: false,
          }}
          validationSchema={AgentSignupSchema}
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
          }) => (
            <form
              onSubmit={handleSubmit}
              className="col-12 col-md-9 col-xl-8 m-auto overflow-auto"
            >
              <div className="pb-1">
                <h2 className="text-primary h3">Agent Form</h2>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="agencyName">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="agencyName"
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
                    type="text"
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
                  <label className="mb-2 text-secondary" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-danger small">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label
                    className="mb-2 text-secondary"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="text-danger small">
                      {errors.confirmPassword}
                    </div>
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
                    htmlFor="confirmation"
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
