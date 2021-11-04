import React from 'react';
import { Link } from 'react-router-dom';
import universalStyles from './../styles/universal.module.css';

export const Accordion = ({ heading, headingcenter }) => {
  return (
    <React.Fragment>
      <div className="accordion pt-5 container" id="accordionExample">
        <h2
          className={`pb-5 custom-primary-color ${
            headingcenter ? 'text-center' : 'text-left'
          }`}
        >
          {heading || 'Accordion Section'}
        </h2>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingOne"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                1. How many case can I report per day
              </div>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse noshow"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              You can report as many valid case as you want.
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingTwo"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Am I safe for reporting?
              </div>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              You are reporting anonymously on this platform.
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingThree"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Will something happen after reporting my case?
              </div>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              There are over 20 Anti-fraud registered agency on our platform,
              all agency cannot ignore your case if it is really genuie.
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link to="/new_petition" className="btn btn-danger">
            Blow Whistle
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
