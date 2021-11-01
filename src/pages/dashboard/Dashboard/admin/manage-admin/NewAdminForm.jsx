import { Formik, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { AdminRegistrationSchema } from '../../../../../components/helper/yupFormValidation';
import { DashboardComponentLoader } from '../../dashboard-layout/DashboardLoader';

export const NewAdminForm = () => {
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
          initialValues={{ userName: '', password: '', confirmation: false }}
          validationSchema={AdminRegistrationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            values,
            handleChange,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="col-12 col-md-9 col-xl-8 m-auto overflow-auto"
            >
              <div className="pb-1">
                <h2 className="text-primary h3">Admin Registration Form</h2>
                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="userName">
                    Admin Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="userName"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.userName && errors.userName ? (
                    <div className="text-danger small">{errors.userName}</div>
                  ) : null}
                </div>

                <div className="form-group mt-4">
                  <label className="mb-2 text-secondary" htmlFor="password">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg text-secondary fs-6"
                    id="password"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-danger small">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <Field
                    type="checkbox"
                    id="confirmation"
                    name="confirmation"
                  />{' '}
                  <label
                    className="text custom-primary-color-danger"
                    htmlFor="confirmation"
                  >
                    Please confirm the admin information above.
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
