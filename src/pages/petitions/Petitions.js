import React, { useState } from 'react';
import { Hero } from '../../components/layouts/Hero';
import { PageLoader } from '../../components/layouts/PageLoader';
import { PetitionSection } from '../../components/layouts/PetitionSection';

export const Petitions = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <PageLoader setLoading={setLoading} />;
  return (
    <React.Fragment>
      <Hero />
      <PetitionSection size={20} headingcenter />
    </React.Fragment>
  );
};
