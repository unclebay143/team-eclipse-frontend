import React from 'react';
import { Link } from 'react-router-dom';
import universalStyles from './../styles/universal.module.css';

export const Accordion = ({ heading, headingcenter }) => {
  return (
    <React.Fragment>
      <div className="accordion pt-5 container" id="accordionExample">
        <h2
          className={`pb-5 custom-primary-color ${
            headingcenter ? 'text-center' : 'text-left'
          }`}
        >
          {heading || 'Accordion Section'}
        </h2>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingOne"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                1. Collapsible Group Item
              </div>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse noshow"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingTwo"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Collapsible Group Item
              </div>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className={`card-header ${universalStyles.bgPrimaryColor}`}
            id="headingThree"
          >
            <h5 className="mb-0">
              <div
                className="btn btn-link text-decoration-none text-white collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Collapsible Group Item
              </div>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body custom-primary-color">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link to="/new_petition" className="btn btn-danger">
            Blow Whistle
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
