import Pathfinder from '../components/mainPage/pathfinder';
import Head from 'next/head';
import Header from '../components/mainPage/header';
import Content from '../components/mainPage/content';
import Footer from '../components/mainPage/footer';
import MainMetaInfo from '../components/common/mainMetaInfo';
import Analytics from '../components/common/analytics';
import RespScreenWidth from '../components/common/mediaConst';

const headerHeight = 80;

const Home = () => {
  return (
    <>
      <Analytics />
      <Head>
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
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
      </Head>

      <div className="map-image">
        <div id="home" className="header">
          <div className="page-content" style={{ height: '100%' }}>
            <Header />
          </div>
        </div>
        <div className="page-content content">
          <Content />
        </div>
      </div>
      <div id="pathfinder" className="bg-block-2">
        <div className="page-content">
          <Pathfinder />{' '}
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

          .map-image {
            height: 100vh;
            overflow: hidden;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) -3%,
                rgba(255, 255, 255, 0.68) 117%
              ),
              url(/img/map-image.png);
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

          .content {
            position: relative;
            padding-top: ${headerHeight + 27}px;
            margin-bottom: auto;
          }

          .bg-block-2 {
            background-color: #fff;
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .footer-background {
            width: 100%;
            height: 180px;
            background-color: var(--footer-back);
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .page-content {
              max-width: 1010px;
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
            .content {
              padding-top: ${headerHeight}px;
            }
            .footer-background {
              height: 215px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
