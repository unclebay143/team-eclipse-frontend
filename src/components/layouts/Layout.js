import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import styles from './../styles/layouts.module.css';

export const Layout = ({ children }) => {
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
