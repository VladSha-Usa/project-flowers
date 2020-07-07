import React from 'react';

const PageCaption = ({ caption, offset }) => (
  <>
    <div>
      <div className="pathfinder-caption-background-text">{caption}</div>
      <div className="pathfinder-caption-text">{caption}</div>
    </div>
    <style jsx>
      {`
        .pathfinder-caption-background-text {
          object-fit: contain;
          opacity: 0.12;
          font-family: Montserrat;
          font-size: 38px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: 1.78px;
          color: var(--transparency);

          text-transform: uppercase;
          text-align: center;
          position: relative;
          top: 18px;
        }
        .pathfinder-caption-text {
          font-family: Montserrat;
          font-size: 28px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.31px;
          color: var(--texticonscolor);
          text-transform: uppercase;
          text-align: center;
          position: relative;
        }
      `}
    </style>
  </>
);

export default PageCaption;
