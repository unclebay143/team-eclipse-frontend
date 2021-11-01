import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../../../components/styles/petition.module.css';
import universalStyles from './../../../components/styles/universal.module.css';
// ../components/styles / universal.module.css';
import { PetitionSection } from './../../../components/layouts/PetitionSection';

export const ViewPetition = () => {
  return (
    <React.Fragment>
      <section className={`container ${styles.petitionContainer}`}>
        <article>
          <section
            className={`text-center px-3 ${universalStyles.bgPrimaryColor} ${styles.heading}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </section>
          {/* Tags */}

          {/* TODO: convert to component */}
          <div className="my-3">
            <span
              className="badge bg-primary"
              style={{ marginRight: '0.5rem' }}
            >
              Pending
            </span>
            <span className="badge bg-danger">EFCC</span>
          </div>
          {/* Content */}
          <section className={universalStyles.primaryColor}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              debitis doloribus vero quis doloremque sequi corrupti soluta
              accusantium alias non iste ratione, quasi quod illo voluptate
              maxime odio. Itaque, hic.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt debitis doloribus vero quis doloremque
              sequi corrupti soluta accusantium alias non iste ratione, quasi
              quod illo voluptate maxime odio. Itaque, hic.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deserunt debitis doloribus vero
              quis doloremque sequi corrupti soluta accusantium alias non iste
              ratione, quasi quod illo voluptate maxime odio. Itaque, hic.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              debitis doloribus vero quis doloremque sequi corrupti soluta
              accusantium alias non iste ratione, quasi quod illo voluptate
              maxime odio. Itaque, hic.
            </p>
          </section>
        </article>

        <section>
          <strong className="text-danger">
            Other sensitive information are hidden and reserved for the right
            agency
          </strong>
          <div className="py-2">
            <Link
              to="/agency_login"
              className={`btn btn-sm text-white ${universalStyles.bgPrimaryColor}`}
            >
              Login as Agency
            </Link>
          </div>
        </section>
      </section>

      {/* More petition section */}
      <section>
        <PetitionSection size={3} />
      </section>
    </React.Fragment>
  );
};
