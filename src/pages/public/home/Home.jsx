import React, { useEffect, useState } from 'react';
import { PetitionSection } from '../../../components/layouts/PetitionSection';
import { Carousel } from '../../../components/layouts/Carousel';
import { NewsLetter } from '../../../components/layouts/NewsLetter';
import { Accordion } from '../../../components/layouts/Accordion';
import { Notice } from '../../../components/layouts/Notice';
import { ImageSection } from '../../../components/layouts/ImageSection';
import axios from 'axios';
import { getAllPetitions } from '../../../redux/petition/actions/petition.actions';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const [sucessStories, setsucessStories] = useState([]);
  const [hallOfShame, setHallOfShame] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await axios.get(url);
      return response;
    };
    // const endpoint = 'https://randomuser.me/api/';
    const endpoint = 'https://jsonplaceholder.typicode.com/photos';
    fetchData(endpoint).then(({ data }) => {
      setHallOfShame(data.slice(0, 3));
      setsucessStories(data.slice(0, 3));
    });

    // dispatch(getAllPetitions());
  }, []);
  return (
    <React.Fragment>
      <NewsLetter />
      <Carousel />
      <Notice />
      <PetitionSection headingcenter />
      <ImageSection
        heading="Hall Of Shame"
        data={hallOfShame}
        headingcenter
        squareImage
      />
      <ImageSection
        heading="Success Stories"
        data={sucessStories}
        headingcenter
      />
      <Accordion heading={'Frequently Asked Questions'} headingcenter />
    </React.Fragment>
  );
};
