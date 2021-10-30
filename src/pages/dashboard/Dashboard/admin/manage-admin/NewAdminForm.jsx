import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
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
            <form className="col-12 col-md-9 col-xl-8 m-auto overflow-auto">
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
                    placeholder=""
                    autoComplete="off"
                  />
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
                    placeholder=""
                    autoComplete="off"
                  />
                </div>
                <div className="form-group mt-4">
                  <input type="checkbox" id="confirmation" />{' '}
                  <label
                    className="text custom-primary-color-danger"
                    for="confirmation"
                  >
                    Please confirm the admin information above
                  </label>
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
