import React from 'react';

export const ImageSection = ({ heading, headingcenter, data, squareImage }) => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <h2
          className={`pb-5 custom-primary-color ${
            headingcenter ? 'text-center' : 'text-left'
          }`}
        >
          {heading || 'Success Stories'}
        </h2>
        <div className="row">
          {data?.map(({ url: imgSrc, title, description }) => {
            return (
              <ImageSectionCard
                imgSrc={imgSrc}
                title={title}
                description={description}
                squareImage={squareImage ? true : false}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export const ImageSectionCard = ({
  imgSrc,
  title,
  description,
  squareImage,
}) => {
  const imagePlaceholder = (
    <svg
      className="bd-placeholder-img rounded-circle"
      className={`bd-placeholder-img ${squareImage || 'rounded-circle'}`}
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 140x140"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>{title}</title>
      <rect width="100%" height="100%" fill="#12326b" />
      <text x="50%" y="50%" fill="#12326b" dy=".3em">
        140x140
      </text>
    </svg>
  );

  // fake image generator

  const imgNumber = Math.floor(Math.random() * 10);
  const gender = Math.floor(Math.random() * 2);
  const sex = ['men', 'women'];
  return (
    <div className="col-lg-4 text-center ">
      {imgSrc ? (
        <img
          // src={imgSrc}
          src={`https://randomuser.me/api/portraits/${sex[gender]}/${imgNumber}.jpg`}
          className={`img-fluid ${squareImage || 'rounded-circle'} w-75`}
        />
      ) : (
        imagePlaceholder
      )}
      <h5 className="pt-4 pb-2 custom-primary-color">
        {title}
        {title}
        {title}
        {title}
      </h5>
      <p className="custom-primary-color">{description}</p>

      {/* <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p> */}
    </div>
  );
};
