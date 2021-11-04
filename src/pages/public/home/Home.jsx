import React, { useEffect } from 'react';
import { PetitionSection } from '../../../components/layouts/PetitionSection';
import { Carousel } from '../../../components/layouts/Carousel';
import { NewsLetter } from '../../../components/layouts/NewsLetter';
import { Accordion } from '../../../components/layouts/Accordion';
import { Notice } from '../../../components/layouts/Notice';
import { getAllPetitions } from '../../../redux/petition/actions/petition.actions';
import { useDispatch } from 'react-redux';
import { HallOfShameSection } from './hallofshamesection/HallOfShameSection';
import { SuccessStorySection } from './success-stories/SuccessStoriesSection';
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPetitions());
  }, []);

  return (
    <React.Fragment>
      <NewsLetter />
      <Carousel />
      <Notice />
      <PetitionSection headingcenter />
      <HallOfShameSection />
      <SuccessStorySection />
      <Accordion heading={'Frequently Asked Questions'} headingcenter />
    </React.Fragment>
  );
};
