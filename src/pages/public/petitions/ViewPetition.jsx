import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import styles from './../../../components/styles/petition.module.css';
import universalStyles from './../../../components/styles/universal.module.css';
// ../components/styles / universal.module.css';
import { PetitionSection } from './../../../components/layouts/PetitionSection';
import { getAllPetitions } from '../../../redux/petition/actions/petition.actions';
import { useDispatch, useSelector } from 'react-redux';
import { PageLoader } from '../../../components/layouts/PageLoader';
import Loader from 'react-loader-spinner';

export const ViewPetition = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { petitions } = useSelector((state) => state.petitions);
  const [currentPetition, setCurrentPetition] = useState(null);

  useEffect(() => {
    dispatch(getAllPetitions());
  }, [dispatch]);

  useEffect(() => {
    if (petitions?.length > 0) {
      const matchPetition = petitions.filter(
        (petition) => petition.caseId === id
      );
      setCurrentPetition(...matchPetition);
    }
  }, [id, petitions]);

  if (!currentPetition)
    return (
      <div className="container text-center">
        <Loader color="#12326b" />
      </div>
    );

  if (currentPetition?.length === 0) {
    return (
      <h3 className="text-center custom-primary-color">
        Case id: <code className="small fs-6">{id}</code> not found 😢
      </h3>
    );
  }

  return (
    <React.Fragment>
      <PetitionArticle petitionData={currentPetition} />
      {/* More petition section */}
      <section>
        <PetitionSection size={3} />
      </section>
    </React.Fragment>
  );
};

export const PetitionArticle = ({ petitionData }) => {
  const { title, type, status, description1, preferredAgency } = petitionData;
  return (
    <React.Fragment>
      <section className={`container ${styles.petitionContainer}`}>
        <article>
          <section
            className={`text-center px-3 ${universalStyles.bgPrimaryColor} ${styles.heading}`}
          >
            {title}
          </section>
          {/* Tags */}

          {/* TODO: convert to component */}
          <div className="my-3">
            <span
              className="badge bg-primary text-uppercase"
              style={{ marginRight: '0.5rem' }}
            >
              {status}
            </span>
            <span className="badge bg-danger text-uppercase">
              {preferredAgency}
            </span>
          </div>
          {/* Content */}
          <section className={universalStyles.primaryColor}>
            <p>{description1}</p>
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
    </React.Fragment>
  );
};
