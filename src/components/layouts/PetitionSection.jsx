import React from 'react';
import { Link } from 'react-router-dom';
import { PetitionCard } from './PetitionCard';
import universalStyles from './../styles/universal.module.css';
import { useSelector } from 'react-redux';

export const PetitionSection = ({
  size = 6,
  heading,
  headingcenter,
  hideMoreButton,
}) => {
  const { petitions } = useSelector((state) => state.petitions);
  //  Early return
  if (!petitions)
    return <p className="text-center lead">Loading petitions...</p>;
  return (
    <React.Fragment>
      <div className="pt-5 bg-light">
        <div className="container">
          <h2
            className={`pb-5 custom-primary-color ${
              headingcenter ? 'text-center' : 'text-left'
            }`}
          >
            {heading || 'Public Petitions'}
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[...petitions]
              ?.reverse()
              .slice(0, size)
              .map(({ title, caseId, ...rest }) => {
                return (
                  <PetitionCard
                    key={caseId}
                    caseId={caseId}
                    title={title}
                    rest={rest}
                  />
                );
              })}
          </div>

          {hideMoreButton ? (
            <div className="text-center my-5">
              <p className="btn">You reached the end</p>
            </div>
          ) : (
            <div className="text-center my-5">
              <Link
                to="/petitions"
                className={`btn ${universalStyles.outlineBtn}`}
              >
                Load More
              </Link>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
