import React from 'react';
import RespScreenWidth from '../common/mediaConst';

const BreadcrumbsNav = ({ vm }) => (
  <>
    <ul className="breadcrumbs-wrapper">
      {vm.breadcrumbs.map((obj, index) => (
        <li className="breadcrumbs-item" key={index}>
          <a href={obj.src}>{obj.name}</a>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        .breadcrumbs-wrapper {
          display: flex;
          align-items: center;
          list-style-type: none;
          padding-inline-start: 0px;
        }
        .breadcrumbs-wrapper .breadcrumbs-item a {
          text-decoration: none !important;
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
        }
        .breadcrumbs-wrapper .breadcrumbs-item {
          margin-right: 23px;
          position: relative;
        }
        .breadcrumbs-wrapper .breadcrumbs-item:last-child a {
          color: var(--primarycolor);
          pointer-events: none;
          font-weight: 600;
        }
        .breadcrumbs-wrapper .breadcrumbs-item:not(:last-child):after {
          content: '';
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1.5px;
          background-color: var(--primarycolor);
          right: -12.5px;
          top: 5px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .breadcrumbs-wrapper {
            align-items: flex-start;
            margin-block-end: 27px;
            flex-wrap: wrap;
          }
          .breadcrumbs-item:first-child {
          }
          .breadcrumbs-item {
            text-align: center;
            max-width: 145px;
          }
          .breadcrumbs-wrapper .breadcrumbs-item a {
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.84px;
          }
        }
      `}
    </style>
  </>
);
export default BreadcrumbsNav;
