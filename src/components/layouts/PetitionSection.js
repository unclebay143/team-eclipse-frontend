import React, { useEffect, useState } from "react";
import { PetitionCard } from "./PetitionCard";

export const PetitionSection = () => {
  const [petitions, setPetitions] = useState(null);

  const fetchPetition = () => {
    const endpoint =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f3c5ea1654694599bc5c8abf9b6e754c";
    const res = fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(({ articles }) => setPetitions(articles));
  };

  useEffect(() => {
    //   Invoke function
    fetchPetition();
  }, []);

  if (!petitions) return <p className="text-center lead">Loading...</p>;

  return (
    <React.Fragment>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {petitions
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)
              .map(({ title, ...rest }, index) => {
                return <PetitionCard key={index} title={title} rest={rest} />;
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
