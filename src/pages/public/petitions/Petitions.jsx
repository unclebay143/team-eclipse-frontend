import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hero } from '../../../components/layouts/Hero';
import { PetitionSection } from '../../../components/layouts/PetitionSection';
import { getAllPetitions } from '../../../redux/petition/actions/petition.actions';

export const Petitions = () => {
  const dispatch = useDispatch();
  const { petitions } = useSelector((state) => state.petitions);

  useEffect(() => {
    dispatch(getAllPetitions());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Hero />
      <PetitionSection size={petitions?.length} headingcenter hideMoreButton />
    </React.Fragment>
  );
};
