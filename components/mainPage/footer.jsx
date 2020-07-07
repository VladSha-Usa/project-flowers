import ImageLink from '../common/imageLink';
import RespScreenWidth from '../common/mediaConst';

const Footer = () => (
  <>
    <footer>
      <div className="footer-navbar">
        <div className="footer-banner">
          <nav>
            <a href="#">
              <img
                src="/img/logo-footer.png"
                srcSet="/img/logo-footer@2x.png 2x, /img/logo-footer@3x.png 3x"
                className="logo-footer"
              />
            </a>
          </nav>
        </div>
        <div className="footer-social">
          <div className="find-us-here">Шукайте нас тут: </div>
          <nav style={{ marginRight: '5px' }}>
            <ImageLink
              href="#"
              src="/img/viber-footer-icon.svg"
              hoverSrc="/img/viber-hover.svg"
              imgWidth="40px"
              imgHeight="40px"
            />
          </nav>
          <nav style={{ marginLeft: '5px', marginRight: '5px' }}>
            <ImageLink
              href="http://instagram.com/flowers__way/"
              src="/img/instagram-footer-icon.svg"
              hoverSrc="/img/instagram-hover.svg"
              imgWidth="40px"
              imgHeight="40px"
            />
          </nav>
          <nav style={{ marginLeft: '5px' }}>
            <ImageLink
              href="https://www.facebook.com/ovchynnikova.nadiia/"
              src="/img/facebook-footer-icon.svg"
              hoverSrc="/img/facebook-hover.svg"
              imgWidth="40px"
              imgHeight="40px"
            />
          </nav>
        </div>
      </div>
      <div className="footer-copyright">
        ©2019 Flowers way. All Rights Reserved.
      </div>
    </footer>

    <style jsx>
      {`
        .find-us-here {
          margin-right: 20px;
        }
        .footer-navbar {
          padding-top: 40px;
          display: flex;
        }
        .footer-copyright {
          font-family: Montserrat;
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.7px;
          color: #ffffff;
          width: 100%;
          padding-top: 40px;
          text-align: center;
        }
        .footer-social {
          align-items: center;
          display: flex;
          margin-left: auto;
        }
        .find-us-here {
          font-family: Montserrat;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.84px;
          color: #ffffff;
        }
        .footer-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        .logo-footer {
          width: 210px;
          height: 55px;
          object-fit: contain;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .footer-icon {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
          .footer-navbar {
            display: block;
            padding-top: 26px;
            text-align: center;
          }
          .footer-social {
            padding-top: 30px;
          }
          .footer-copyright {
            padding-top: 35px;
          }
          .find-us-here {
            font-size: 16px;
            margin-right: auto;
          }
          .footer-copyright {
            font-size: 14px;
          }
          .logo-footer {
            width: 180px;
            height: 45px;
            object-fit: contain;
          }
        }
      `}
    </style>
  </>
);

export default Footer;
