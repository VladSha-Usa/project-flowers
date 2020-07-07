import React from 'react';

const MainMetaInfo = ({ title, description, img }) => (
  <>
    <meta property="og:locale" content="uk_UA" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://flowersway.com.ua" />
    <meta property="og:image" content={img} />
    <meta property="og:site_name" content="Спорядження для легких подорожей" />
  </>
);

export default MainMetaInfo;
