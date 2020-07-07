import React from 'react';
import Head from 'next/head';

const Stage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <a href="">
        <div href="#" className="button-field button-field-text">
          <img
            style={{ marginLeft: 'auto', marginRight: '6px' }}
            src="/img/shop-icon.svg"
            className="shop-icon"
          />
          <div style={{ marginRight: 'auto', marginLeft: '6px' }}>Shop</div>
        </div>
      </a>

      <style jsx>{`
        .button-field {
          align-items: center;
          display: flex;
          width: 180px;
          height: 50px;
          border-radius: 25px;
          box-shadow: 0 14px 24px 0 rgba(13, 26, 113, 0.25);
          background-color: #1831aa;
        }
        .shop-icon {
          width: 20px;
          height: 22px;
          object-fit: contain;
        }
        .button-field :hover {
          background-color: #3653e2;
        }
        .button-field-text {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.79px;
          text-transform: uppercase;
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default Stage;
