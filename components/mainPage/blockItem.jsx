import RespScreenWidth from '../common/mediaConst';

const BlockItem = ({
  src,
  srcSet,
  href,
  children,
  backText,
  enabled,
  type,
  title,
  button,
  icoButton,
}) => {
  const shapeRightClass = 'block-shape-right';
  const shapeLeftClass = 'block-shape-left';
  const titleClass = 'block-shape-title';

  const vertBackgroundClass = 'block-background';
  const blockClass = 'block-block';

  const shop = {
    small: {
      fontSize: 76,
      offsetLeft: '178px',
      offsetTop: '-200px',
      letterSpacing: '0.68px',
      imageWidth: '320px',
      imageHeight: '430px',
      marginRight: '0px',
      marginTop: '0px',
    },
    normal: {
      fontSize: 76,
      offsetLeft: '178px',
      offsetTop: '-200px',
      imageWidth: '320px',
      imageHeight: '425px',
      marginRight: '50px',
      marginTop: '0px',
    },
  };
  const pathfinder = {
    small: {
      fontSize: 33,
      offsetLeft: '170px',
      offsetTop: '-180px',
      letterSpacing: '1.68px',
      imageWidth: '320px',
      imageHeight: '250px',
      marginRight: '0px',
      marginTop: '20px',
    },
    normal: {
      fontSize: 32,
      offsetLeft: '100px',
      offsetTop: '-180px',
      letterSpacing: '1.68px',
      imageWidth: '250px',
      imageHeight: '200px',
      marginRight: '0px',
      marginTop: '0px',
    },
  };
  const blog = {
    small: {
      fontSize: 36,
      offsetLeft: '170px',
      offsetTop: '-180px',
      letterSpacing: '1.68px',
      imageWidth: '320px',
      imageHeight: '250px',
      marginRight: '0px',
      marginTop: '20px',
    },
    normal: {
      fontSize: 36,
      offsetLeft: '100px',
      offsetTop: '-180px',
      letterSpacing: '1.68px',
      imageWidth: '250px',
      imageHeight: '200px',
      marginRight: '0px',
      marginTop: '0px',
    },
  };

  let style;
  switch (type) {
    case 'blog':
      style = blog;
      break;
    case 'shop':
      style = shop;
      break;
    case 'pathfinder':
      style = pathfinder;
      break;
  }
  let opacity = 1;
  if (!enabled) {
    opacity = 0.5;
  }

  return (
    <>
      <div style={{ opacity }} className={blockClass}>
        <div className="block-title">{title}</div>
        <div className="img-wrapper">
          <img src={src} srcSet={srcSet} className="pathfinder-blog-image" />
          <a href={href} className="button-img-wrapper">
            <div>{button}</div>
            <img src={icoButton} />
          </a>
        </div>
        <div className={vertBackgroundClass}>{backText || children}</div>

        <div className={titleClass}>
          <div className={shapeLeftClass} />
          <div className="text">{children}</div>
          <div className={shapeRightClass} />
        </div>
      </div>
      <style jsx>
        {`
          .block-title {
            text-align: center;
            margin-bottom: 14px;
            width: ${style.normal.imageWidth};
            font-family: Montserrat;
            font-size: 17px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: 0.79px;
            color: #040f2a;
          }
          .img-wrapper {
            width: ${style.normal.imageWidth};
            height: ${style.normal.imageHeight};
            padding-top: 5px;
            position: relative;
            z-index: 10;
            width: fit-content;
          }

          .button-img-wrapper {
            position: absolute;
            z-index: 10;
            bottom: 0px;
            right: 0;
            display: flex;
            cursor: ${enabled ? 'pointer' : 'default'};
            text-decoration: none;
            font-family: Montserrat;
            font-size: 16px;
            letter-spacing: 0.75px;
            font-weight: 600;
            color: #ffffff;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            background-color: #1831aa;
            border: none;
            padding: 15px 15px 15px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 30px;
            border-top-left-radius: 30px;
            outline: none;
          }
          .button-img-wrapper:hover {
            box-shadow: ${enabled
              ? '0 14px 24px 0 rgba(13, 26, 113, 0.25)'
              : 'none'};
            background-color: ${enabled ? '#3653e2' : 'none'};
          }
          .button-img-wrapper div {
            margin-right: 20px;
          }

          .${shapeLeftClass} {
            margin-left: auto;
            margin-right: 10px;
            width: 10px;
            height: 3px;
            border-radius: 1.5px;
            background-color: #1831aa;
          }
          .${shapeRightClass} {
            margin-left: 10px;
            margin-right: auto;
            width: 8px;
            height: 3px;
            border-radius: 1.5px;
            background-color: #1831aa;
          }
          .${titleClass} {
            width: ${style.normal.imageWidth};
            align-items: center;
            display: flex;
            position: relative;
            top: -${style.normal.fontSize * 0.75}px;
          }
          .${vertBackgroundClass} {
            object-fit: contain;
            transform: rotate(-90deg);
            opacity: 0.12;
            font-family: Montserrat;
            font-size: ${style.normal.fontSize}px;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.11;
            letter-spacing: ${style.normal.letterSpacing};
            color: #296fdc;

            position: relative;
            z-index: 0;
            left: ${style.normal.offsetLeft};
            top: ${style.normal.offsetTop};
          }
          .pathfinder-blog-image {
            background-color: #ffffff;
            height: 100%;
            width: 100%;
            border-radius: 10px;
            position: relative;
            object-fit: cover;
            overflow: hidden;
            box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
            z-index: 10;
          }

          .text {
            font-family: Montserrat;
            font-size: 17px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.65;
            letter-spacing: 0.79px;
            text-align: center;
            color: #061434;
            text-transform: uppercase;
          }

          .${blockClass} {
            width: ${style.small.imageWidth};
            position: relative;
            margin-right: ${style.normal.marginRight};
            margin-top: ${style.normal.marginTop};
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .${blockClass} {
              width: ${style.small.imageWidth};
              margin-right: ${style.normal.marginRight};
            }
            .${vertBackgroundClass} {
              font-size: ${style.small.fontSize}px;
              letter-spacing: ${style.small.letterSpacing};
              left: ${style.normal.offsetLeft};
              top: ${style.normal.offsetTop};
            }
            .${titleClass} {
              width: ${style.normal.imageWidth};
            }
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .block-title {
              font-size: 17px;
              width: ${style.small.imageWidth};
            }
            .${titleClass} {
              width: ${style.small.imageWidth};
            }
            .${vertBackgroundClass} {
              font-size: ${style.small.fontSize}px;
              letter-spacing: ${style.small.letterSpacing};
              left: ${style.small.offsetLeft};
              top: ${style.small.offsetTop};
            }
            .img-wrapper {
              width: ${style.small.imageWidth};
              height: ${style.small.imageHeight};
            }
            .${blockClass} {
              margin-right: auto;
              margin-left: auto;
              width: ${style.small.imageWidth};
              margin-top: ${style.small.marginTop};
            }
          }
        `}
      </style>
    </>
  );
};

export default BlockItem;
