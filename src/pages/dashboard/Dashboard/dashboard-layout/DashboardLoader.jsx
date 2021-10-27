import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';

export const DashboardLoader = ({ setLoading }) => {
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
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
        <Loader type="BallTriangle" color="#0091ff" height={100} width={100} />
      </section>
    </React.Fragment>
  );
};

export const DashboardComponentLoader = () => {
  return (
    <React.Fragment>
      <section className="d-flex justify-content-center align-items-center w-100">
        <Loader type="Puff" color="#0091ff" height={50} width={50} />
        {/* <Loader type="BallTriangle" color="#0091ff" height={100} width={100} /> */}
      </section>
    </React.Fragment>
  );
};
