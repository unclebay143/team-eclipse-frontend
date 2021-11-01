import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PetitionCard } from './PetitionCard';
import universalStyles from './../styles/universal.module.css';

export const PetitionSection = ({ size = 6, heading, headingcenter }) => {
  const [petitions, setPetitions] = useState(null);

  const fetchPetition = () => {
    const endpoint =
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f3c5ea1654694599bc5c8abf9b6e754c';
    const res = fetch(endpoint, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(({ articles }) => setPetitions(articles));
  };

  useEffect(() => {
    //   Invoke function
    fetchPetition();
  }, []);

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
            {petitions
              .sort(() => 0.5 - Math.random())
              .slice(0, size)
              .map(({ title, ...rest }, index) => {
                return <PetitionCard key={index} title={title} rest={rest} />;
              })}
          </div>
          <div className="text-center my-5">
            <Link
              to="/petitions"
              className={`btn ${universalStyles.outlineBtn}`}
            >
              Load More
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
