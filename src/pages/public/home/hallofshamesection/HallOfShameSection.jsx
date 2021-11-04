import React from 'react';
import { hallOfShameBgImage } from './hallofshame.module.css';

const data = [
  {
    id: 1,
    fullname: 'Ramon Olorunwa Abbas',
    imgSrc:
      'https://www.theelitesng.com/wp-content/uploads/2020/06/1F01EBE9-61D4-46E9-AFE1-ECDE6ECC0908-1024x1024.jpeg',
    crime: 'Fraud',
    crimeDescription:
      'Ramon Abbas, commonly known as Hushpuppi, Hush or Ray Hushpuppi is a Nigerian Instagram celebrity who is facing criminal charges in the United States for conspiracy to launder money obtained from business',
  },
  {
    id: 2,
    fullname: 'Chukwudi Dumee Onuamadike',
    imgSrc:
      'https://i0.wp.com/austinemedia.com/wp-content/uploads/2020/08/cover-7.jpg?resize=642%2C321&ssl=1',
    crime: 'Kidnapping',
    crimeDescription:
      'Chukwudi Dumee Onuamadike, popularly known as Evans, is a Nigerian kidnapper. He is sometimes referred to as "The Billionaire Kidnapper" because the Nigeria Police Force believe he is one of the richest criminals in the kidnapping business in Nigeria.',
  },
  {
    id: 3,
    fullname: 'Uduebor Uche Folorunsho',
    imgSrc:
      'https://alexis.lindaikejisblog.com/photos/shares/5ba55052c2f9b.jpg',
    crime: 'Electronic Fraud',
    crimeDescription:
      'The DCI Detectives in Kenya have arrested two Nigerians and one Tanzanian for engaging in electronic fraud where local banks reportedly lost huge amounts of cash. ',
  },
];
export const HallOfShameSection = () => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <h2 className="pb-5 custom-primary-color text-center">Hall Of Shame</h2>
        <div className={hallOfShameBgImage}></div>
        <div className="row">
          {data?.map(({ id, imgSrc, fullname, crime, crimeDescription }) => {
            return (
              <HallOfShameSectionCard
                key={id}
                imgSrc={imgSrc}
                fullname={fullname}
                crime={crime}
                crimeDescription={crimeDescription}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export const HallOfShameSectionCard = ({
  imgSrc,
  fullname,
  crimeDescription,
  crime,
}) => {
  const imagePlaceholder = (
    <svg
      className="bd-placeholder-img"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 140x140"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>{fullname}</title>
      <rect width="100%" height="100%" fill="#12326b" />
      <text x="50%" y="50%" fill="#12326b" dy=".3em">
        140x140
      </text>
    </svg>
  );

  return (
    <div className="col-lg-4 text-center p-4">
      <div style={{ height: '276px' }}>
        {imgSrc ? (
          <img
            // src={`    https://avatars.dicebear.com/api/identicon/${sex[gender]}.svg`}
            src={imgSrc}
            className="img-fluid w-100 h-100"
          />
        ) : (
          imagePlaceholder
        )}
      </div>
      <h5 className="pt-4 custom-primary-color">{fullname}</h5>
      <h5 className="small pb- custom-primary-color">{crime}</h5>
      <p className="custom-primary-color">{crimeDescription}</p>

      {/* <p>
              <a className="btn btn-secondary" href="/">
                View details »
              </a>
            </p> */}
    </div>
  );
};
