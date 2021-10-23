import React, { useEffect, useState } from 'react';
import { PetitionSection } from '../../components/layouts/PetitionSection';
import { Carousel } from '../../components/layouts/Carousel';
import { NewsLetter } from '../../components/layouts/NewsLetter';
import { Accordion } from '../../components/layouts/Accordion';
import { PageLoader } from '../../components/layouts/PageLoader';

export const Home = () => {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  if (loading) return <PageLoader setLoading={setLoading} />;
  return (
    <React.Fragment>
      <NewsLetter />
      <Carousel />
      <PetitionSection headingcenter />
      <Accordion />
    </React.Fragment>
  );
};
