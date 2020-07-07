import React, { useEffect } from 'react';
import BasketLogic from '../../data/logic/basket';
import Head from 'next/head';
import Header from '../../components/mainPage/header';
import Footer from '../../components/mainPage/footer';
import TitleSection from '../../components/shop/titleSection';
import ShopStatus from '../../components/shop/shopStatus';
import MainMetaInfo from '../../components/common/mainMetaInfo';
import GoodsList from '../../components/shop/goodsList';
import Analytics from '../../components/common/analytics';
import RespScreenWidth from '../../components/common/mediaConst';

const headerHeight = 80;

const Shop = () => {
  useEffect(() => {
    return BasketLogic.init();
  });

  return (
    <>
      <Head>
        <Analytics />
        <title>Flower's Way. Країна очима велосипедистів</title>
        <MainMetaInfo
          title="Flower's Way. Країна очима велосипедистів. Сумки, велоспорядження"
          description="Велосумки для легких подорожей. Власне виробництво. просте монтування"
          img="https://flowersway.com.ua/img/objects/Swirg2_450_320.jpg"
        ></MainMetaInfo>

        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
      </Head>

      <div id="home" className="header">
        <div className="page-content" style={{ height: '100%' }}>
          <Header />
        </div>
      </div>
      <div className="title-section">
        <div className="page-content">
          <TitleSection />
        </div>
      </div>
      <div className="shop-status">
        <div className="page-content">
          <ShopStatus />
        </div>
      </div>
      <div className="goods-list">
        <div className="page-content">
          <GoodsList />
        </div>
      </div>
      <div className="footer-background">
        <div id="footer" className="page-content">
          <Footer />{' '}
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: ${headerHeight}px;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
          }
          .header-page {
            align-items: center;
            height: 100%;
          }
          .page-content {
            max-width: 1166px;
            margin-left: auto;
            margin-right: auto;
          }

          .header-border ::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--light-blue-grey);
          }

          .header-border {
            background-color: #ffffff;
          }
          .title-section {
            margin-top: 150px;
            margin-bottom: 35px;
          }
          .shop-status {
            margin-bottom: 34px;
          }
          .goods-list {
            margin-bottom: 60px;
          }
          .footer-background {
            width: 100%;
            height: 180px;
            background-color: var(--footer-back);
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .page-content {
              max-width: 960px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .page-content {
              width: 335px;
              margin-left: auto;
              margin-right: auto;
            }
            .map-image {
              height: initial;
            }
            .footer-background {
              height: 215px;
            }
            .shop-status {
              margin-bottom: 37px;
            }
            .title-section {
              margin-top: 104px;
              margin-bottom: 24px;
            }
            .goods-list {
              margin-bottom: 41px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Shop;
