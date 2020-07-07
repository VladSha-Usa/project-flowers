const LanguagePopupMobile = ({ onClose }) => (
  <>
    <div className="lang-popup-mob-wrapper">
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
      <div className="languages-info">
        <span className="intro-title">Вибрати мову:</span>
        <ul className="available__list-lang">
          <li>
            <div className="available-lang choosen">
              <img
                src="/img/country-flag-ua.png"
                srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
              />
              Українська
            </div>
          </li>
          <li>
            <div className="available-lang disabled">
              <img
                src="/img/country-flag-en.png"
                srcSet="/img/country-flag-en@2x.png 2x, img/country-flag-en@3x.png 3x"
              />
              English
            </div>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        .lang-popup-mob-wrapper {
          overflow: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2100;
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          background-color: #ffffff;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.94px;
          color: #061434;
        }
        .languages-info {
          margin-top: 50px;
          margin-left: 33px;
        }
        .intro-title {
          margin-bottom: 30px;
          display: block;
        }
        .available__list-lang {
          list-style: none;
          padding-inline-start: 0px;
        }
        .available__list-lang li {
          margin-bottom: 30px;
        }
        .available-lang {
          display: flex;
          align-items: center;
        }
        .available-lang img {
          padding-right: 14px;
          width: 20px;
          height: 20px;
        }
        .available-lang:focus {
          outline: none;
        }
        .choosen {
          color: var(--primarycolor);
        }
        .disabled {
          opacity: 0.5;
        }
      `}
    </style>
  </>
);
export default LanguagePopupMobile;
