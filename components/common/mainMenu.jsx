import { useState, useEffect } from 'react';
import ImageLink from './imageLink';
import LanguagePopupMobile from './languagePopupMobile';

const MainMenu = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return function cleanup() {
      document.body.classList.remove('no-scroll');
    };
  });
  const [popupLang, setPopupLang] = useState(false);
  return (
    <>
      {popupLang && <LanguagePopupMobile onClose={() => setPopupLang(false)} />}
      <div className="burger__menu-wrapper">
        <div
          style={{
            alignItems: 'center',
            position: 'absolute',
            width: '20px',
            height: '20px',
            top: '20px',
            right: '20px',
          }}
          onClick={() => onClose()}
        >
          <img
            style={{ margin: 'auto' }}
            src="/img/cancelIcon.png"
            srcSet="/img/cancelIcon@2x.png 2x, img/cancelIcon@3x.png 3x"
          />
        </div>
        <div className="burger__menu-banner">
          <nav>
            <a href="#home">
              <img
                src="/img/logo-mobile-header.png"
                srcSet="/img/logo-mobile-header@2x.png 2x, img/logo-mobile-header@3x.png 3x"
                className="burger__menu-banner__img"
              />
            </a>
          </nav>
        </div>
        <div className="burger__menu-navigation">
          <nav className="menu-link">
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
              Магазин
            </a>
          </nav>
          <nav className="menu-link">
            <a href="#pathfinder">Путівник</a>
          </nav>
          <nav className="menu-link">
            <span className="disabled">Блог</span>
          </nav>
        </div>
        <div className="burger__menu-language">
          <nav onClick={() => setPopupLang(true)}>
            <div className="choosen-lang">
              <img
                src="/img/country-flag-ua.png"
                srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
              />
              Українська
            </div>
          </nav>
        </div>
        <div className="burger__menu-socials">
          <nav>
            <ImageLink
              href="#"
              src="/img/viber-burger-menu.svg"
              hoverSrc="/img/viber-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
          <nav>
            <ImageLink
              href="https://www.facebook.com/ovchynnikova.nadiia/"
              src="/img/facebook-burger-menu.svg"
              hoverSrc="/img/facebook-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
          <nav>
            <ImageLink
              href="http://instagram.com/flowers__way/"
              src="/img/instagram-burger-menu.svg"
              hoverSrc="/img/instagram-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
        </div>
      </div>
      <style jsx>
        {`
          .burger__menu-wrapper {
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
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
            z-index: 2000;
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: #ffffff;
          }
          .burger__menu-banner {
            margin: 80px 0px 96px;
          }
          .burger__menu-navigation {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-bottom: 40px;
          }
          .burger__menu-navigation {
            display: flex;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.94px;
            color: var(--primarycolor);
          }
          a:link {
            text-decoration: none;
            color: #061434;
          }
          a:visited {
            text-decoration: none;
            color: #061434;
          }

          .disabled {
            opacity: 0.5;
          }
          .menu-link {
            margin-bottom: 48px;
          }
          .menu-link a:hover {
            color: var(--primarycolor);
          }
          .menu-link a::after {
            content: '';
            display: block;
            position: relative;
            bottom: -8px;
            left: 0px;
            width: 0%;
            height: 2px;
            background: var(--primarycolor);
          }
          .menu-link a:hover::after {
            width: 100%;
          }
          .burger__menu-language {
            margin-bottom: 32px;
          }
          .choosen-lang {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 36px;
            width: fit-content;
            height: 45px;
            cursor: pointer;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0.94px;
            padding-bottom: 8px;
            color: var(--primarycolor);
          }
          .choosen-lang:focus {
            outline: none;
          }
          .choosen-lang img {
            position: absolute;
            margin-left: -89px;
          }
          .burger__menu-socials {
            display: flex;
            flex-direction: row;
            width: 210px;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};

export default MainMenu;
