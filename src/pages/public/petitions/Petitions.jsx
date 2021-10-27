import React from 'react';
import { Hero } from '../../../components/layouts/Hero';
import { PetitionSection } from '../../../components/layouts/PetitionSection';

export const Petitions = () => {
  return (
    <React.Fragment>
      <Hero />
      <PetitionSection size={20} headingcenter />
    </React.Fragment>
  );
};
