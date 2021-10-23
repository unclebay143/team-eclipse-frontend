import React from 'react';
import { Link } from 'react-router-dom';
import universalStyles from './../styles/universal.module.css';
import styles from './../styles/carousel.module.css';

export const Carousel = () => {
  return (
    <React.Fragment>
      <div
        id="myCarousel"
        className={`carousel slide ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item active ${styles.carouselItem}`}>
            <img
              //   src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
              src="https://st.depositphotos.com/1454700/4062/i/600/depositphotos_40621857-stock-photo-scales-of-justice.jpg"
              width="100%"
              height="100%"
              className={`${styles.carouselImg}`}
            />
            <div className="container">
              <div
                className={`carousel-caption text-center ${styles.carouselCaption}`}
              >
                <h1>Whistle Blower.</h1>
                <p>
                  You have the right to report any unlawful cases and incidents
                  in your workspace and the general public.
                </p>
                <p className="">
                  <Link
                    to="/new_petition"
                    className={`btn d-inline-flex justify-content-center align-items-center ${universalStyles.bgPrimaryColor}`}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-megaphone mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                    </svg>{' '}
                    Blow Whistle
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://www.medreich.com/assets/img/sliders/Whistle_Blower_Web.jpg"
              width="100%"
              height="100%"
              className={`${styles.carouselImg}`}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Keep the Nation clear.</h1>
                <p>Report all unlaw incident to the law.</p>
                <p>
                  <a className={`btn ${universalStyles.bgRedColor}`} href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://d.newsweek.com/en/full/498262/referee-whistle.jpg"
              width="100%"
              height="100%"
              className={`${styles.carouselImg}`}
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Track petition status.</h1>
                <p>Have a petition reference id? Check the status here</p>
                <p>
                  <a
                    className="btn btn-primary d-inline-flex justify-content-center align-items-center"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-eye mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    Track Petition
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
};
