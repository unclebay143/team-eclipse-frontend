import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import styles from './../styles/layouts.module.css';
import { PageLoader } from './PageLoader';
import { useHistory } from 'react-router';

export const Layout = ({ children }) => {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // If url changes show loader
    history.listen(() => {
      setLoading(true);
    });
  }, [history]);

  if (loading) return <PageLoader setLoading={setLoading} />;

  return (
    <React.Fragment>
      <div className={styles.layout}>
        <Navbar />

        {children}

        <Footer />
      </div>
    </React.Fragment>
  );
};
