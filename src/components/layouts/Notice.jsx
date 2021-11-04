import React from 'react';

export const Notice = () => {
  return (
    <React.Fragment>
      <section className={`container text-center`}>
        <h2 className="custom-primary-color pb-3">Notice!!!</h2>
        <p className="custom-primary-color w-75 m-auto">
          Whistleblowers are protected from retaliation for disclosing
          information that the employee or applicant reasonably believes
          provides evidence of a violation of any law, rule, regulation, gross
          mismanagement, gross waste of funds, an abuse of authority, or a
          substantial and specific danger to public health or safety.
        </p>
      </section>
    </React.Fragment>
  );
};
