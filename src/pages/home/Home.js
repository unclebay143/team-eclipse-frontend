import React from "react";
import { Hero } from "../../components/layouts/Hero";
import { PetitionSection } from "../../components/layouts/PetitionSection";
import { Carousel } from "../../components/layouts/Carousel";

export const Home = () => {
  return (
    <React.Fragment>
      {/* <Hero /> */}
      <Carousel />
      <PetitionSection />
    </React.Fragment>
  );
};
