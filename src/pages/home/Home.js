import React from 'react';
import { PetitionSection } from '../../components/layouts/PetitionSection';
import { Carousel } from '../../components/layouts/Carousel';
import { NewsLetter } from '../../components/layouts/NewsLetter';
import { Accordion } from '../../components/layouts/Accordion';
import { Notice } from '../../components/layouts/Notice';

export const Home = () => {
  return (
    <React.Fragment>
      <NewsLetter />
      <Carousel />
      <Notice />
      <PetitionSection headingcenter />
      <Accordion heading={'Frequently Asked Questions'} headingcenter />
    </React.Fragment>
  );
};
