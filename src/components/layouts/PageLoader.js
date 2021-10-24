import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styles from './../styles/pageloader.module.css';

export const PageLoader = ({ setLoading }) => {
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();

    return () => setLoading(false);
  }, [setLoading]);

  return (
    <React.Fragment>
      <section className={styles.loader}>
        {/* <Loader type='Puff' color='#00BFFF' height={100} width={100} /> */}
        <Loader type="BallTriangle" color="#0091ff" height={100} width={100} />
      </section>
    </React.Fragment>
  );
};
