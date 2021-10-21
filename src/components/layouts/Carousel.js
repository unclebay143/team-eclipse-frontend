import React from "react";
import universalStyles from "./../styles/Universal.module.css";
import styles from "./carousel.module.css";

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
              src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
              width="100%"
              height="100%"
              className={`${styles.carouselImg}`}
            />
            <div className="container">
              <div
                className={`carousel-caption text-start ${styles.carouselCaption}`}
              >
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
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
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
              width="100%"
              height="100%"
              className={`${styles.carouselImg}`}
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
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
