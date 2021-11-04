import React from 'react';

const data = [
  {
    id: 1,
    title: 'Abuja fraud case solved',
    description:
      'The fraud case I reported was solved by the EFCC and the culprit has been convicted in the court of law.',
  },
  {
    id: 2,
    title: 'Rape case solved',
    description:
      'I reported a rape case on this website last year and it was picked by the Nigeria police and justice was served.',
  },
  {
    id: 3,
    title: 'Vote Malpractice solved',
    description:
      'My boss engaged in a voting rig and was reported on this website, the INEC has apprended him and other people involved.',
  },
];

export const SuccessStorySection = () => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <h2 className="pb-5 custom-primary-color text-center">
          Success Stories
        </h2>
        <div className="sectionImage">
          {/* <img
            src="https://cdn.corporatefinanceinstitute.com/assets/white-collar-crime.jpeg"
            height="100%"
            width="100%"
          /> */}
        </div>
        <div className="row">
          {data?.map(({ id, imgSrc, title, description }) => {
            return (
              <SuccessStoriesSectionCard
                key={id}
                imgSrc={imgSrc}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export const SuccessStoriesSectionCard = ({
  id,
  title,
  imgSrc,
  description,
}) => {
  const imagePlaceholder = (
    <svg
      className="bd-placeholder-img rounded-circle"
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

  return (
    <div className="col-lg-4 text-center ">
      {imgSrc ? (
        <img src={imgSrc} className="img-fluid rounded-circle w-75" />
      ) : (
        imagePlaceholder
      )}
      <h5 className="pt-4 pb-2 custom-primary-color">{title}</h5>
      <p className="custom-primary-color">{description}</p>

      {/* <p>
              <a className="btn btn-secondary" href="/">
                View details »
              </a>
            </p> */}
    </div>
  );
};
