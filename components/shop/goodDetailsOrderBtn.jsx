import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import RespScreenWidth from '../common/mediaConst';

const GoodDetailsOrderBtn = ({ vm }) => (
  <>
    <button
      className="btn-submit"
      type="submit"
      onClick={() => {
        vm.colectDataOfGood({ id: uuidv4() });
        vm.addGood();
      }}
    >
      Зробити замовлення
    </button>
    <style jsx>
      {`
        .btn-submit {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.75px;
          color: var(--white);
          width: 290px;
          height: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 32px 0 rgba(13, 26, 113, 0.2);
          background-color: var(--primarycolor);
          border: none;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .btn-submit {
            width: 100%;
          }
        }
      `}
    </style>
  </>
);

export default GoodDetailsOrderBtn;
