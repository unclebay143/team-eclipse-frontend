import React, { useState } from 'react';
import { PageLoader } from '../../components/layouts/PageLoader';
import { PetitionSection } from '../../components/layouts/PetitionSection';
import styles from './../../components/styles/petition.module.css';
import universalStyles from './../../components/styles/universal.module.css';

export const ViewPetition = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <PageLoader setLoading={setLoading} />;
  return (
    <React.Fragment>
      <article className={`container p-sm3 ${styles.petitionContainer}`}>
        <section
          className={`text-center ${universalStyles.bgPrimaryColor} ${styles.heading}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </section>
        {/* Tags */}
        <div className="my-3">
          <span className="badge bg-primary" style={{ marginRight: '0.5rem' }}>
            Primary
          </span>
          <span className="badge bg-danger">Danger</span>
        </div>
        {/* Content */}
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            debitis doloribus vero quis doloremque sequi corrupti soluta
            accusantium alias non iste ratione, quasi quod illo voluptate maxime
            odio. Itaque, hic.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deserunt debitis doloribus vero quis doloremque sequi corrupti
            soluta accusantium alias non iste ratione, quasi quod illo voluptate
            maxime odio. Itaque, hic.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt debitis doloribus vero quis doloremque
            sequi corrupti soluta accusantium alias non iste ratione, quasi quod
            illo voluptate maxime odio. Itaque, hic.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt debitis doloribus vero quis
            doloremque sequi corrupti soluta accusantium alias non iste ratione,
            quasi quod illo voluptate maxime odio. Itaque, hic.
          </p>
        </section>

        <strong className="text-danger">
          Other sensitive information are hidden and reserved for the right
          agency
        </strong>
      </article>
      <section className="container">
        <PetitionSection size={3} />
      </section>
    </React.Fragment>
  );
};
