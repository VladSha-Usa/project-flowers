import React, { useEffect } from 'react';
import vmFactory from '../../data/viewModels/good1';
import Head from 'next/head';
import Header from '../../components/mainPage/header';
import Footer from '../../components/mainPage/footer';
import MainMetaInfo from '../../components/common/mainMetaInfo';
import GoodDetailsStatus from '../../components/shop/goodDetailsStatus';
import GoodDetailsChoose from '../../components/shop/goodDetailsChoose';
import GoodDetailsSpecification from '../../components/shop/goodDetailsSpecification';
import Analytics from '../../components/common/analytics';
import GoodDetailsThingsTook from '../../components/shop/goodDetailsThingsTook';
import GoodDetailsImgGallery from '../../components/shop/goodDetailsImgGallery';
import GoodDetailsSeeMore from '../../components/shop/goodDetailsSeeMore';
import RespScreenWidth from '../../components/common/mediaConst';

const headerHeight = 80;

const Good1 = () => {
  const vm = vmFactory();
  useEffect(() => {
    return vm.init();
  });
  vm.colectDataOfGood({
    count: 1,
    picture: vm.mainPicture,
    name: vm.name,
    volume: vm.volume,
    price: vm.price,
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
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div id="home" className="header">
        <div className="page-content" style={{ height: '100%' }}>
          <Header />
        </div>
      </div>
      <div className="good-details-status">
        <div className="page-content">
          <GoodDetailsStatus vm={vm.goodDetailsStatusVM} />
        </div>
      </div>
      <div className="good-details-choose">
        <div className="page-content">
          <GoodDetailsChoose vm={vm.goodDetailsChooseVM} />
        </div>
      </div>
      <div className="good-details-specification">
        <div className="page-content">
          <GoodDetailsSpecification vm={vm.goodDetailsSpecificationVM} />
        </div>
      </div>
      <div className="good-details-things-took">
        <div className="page-content">
          <GoodDetailsThingsTook vm={vm.goodDetailsThingsTookVM} />
        </div>
      </div>
      <div className="good-details-img-gallery">
        <div className="page-content">
          <GoodDetailsImgGallery vm={vm.goodDetailsImgGalleryVM} />
        </div>
      </div>
      <div className="good-details-see-more">
        <div className="page-content">
          <GoodDetailsSeeMore vm={vm.goodDetailsSeeMoreVM} />
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
          .good-details-status {
            margin-top: 120px;
            margin-bottom: 60px;
          }
          .good-details-choose {
            margin-bottom: 60px;
          }
          .good-details-specification {
            margin-bottom: 110px;
          }
          .good-details-things-took {
            margin-bottom: 70px;
          }
          .good-details-img-gallery {
            margin-bottom: 145px;
          }
          .good-details-see-more {
            margin-bottom: 60px;
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
            .good-details-status {
              margin-top: 66px;
              margin-bottom: 30px;
            }
            .footer-background {
              height: 215px;
            }
            .good-details-choose {
              margin-bottom: 40px;
            }
            .good-details-specification {
              margin-bottom: 48px;
            }
            .good-details-things-took {
              margin-bottom: 12px;
            }
            .good-details-img-gallery {
              margin-bottom: 50px;
            }
            .good-details-see-more {
              margin-bottom: 47px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Good1;
