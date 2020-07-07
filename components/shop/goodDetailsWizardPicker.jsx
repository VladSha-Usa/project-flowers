import React, { useState, useRef } from 'react';
import RespScreenWidth from '../common/mediaConst';
import useOutsideClick from './useOutsideClick';

const GoodDetailsWizardPicker = ({ vm }) => {
  const [isOpened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = vm.selected;
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpened(false);
  });
  return (
    <>
      <div className="wizard__picker-param">
        <span className="param__general-title">{vm.mainTheme}</span>
        <div className="picker-param__status" ref={ref}>
          <div className="picker-param__status-main">
            <img className="picker-param__status-img" src={selectedItem.src} />
            <span className="param__status-choose__title">
              {selectedItem.name}
            </span>
            <button
              id="picker-param__status-more"
              onClick={() => {
                setOpened(!isOpened);
              }}
            />
          </div>
          <ul className="picker-param__status-list">
            {vm.items.map((item, i) => (
              <li
                onClick={() => {
                  setSelectedItem(item);
                  setOpened(false);
                }}
                key={i}
                className={
                  item === selectedItem ? 'list-elem-active' : 'list-elem'
                }
              >
                <span className="status-list__img-wrapper">
                  <img className="status-list__img" src={item.src} />
                </span>
                <span className="param__status-list__title">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .wizard__picker-param {
            width: 380px;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.85px;
            color: var(--texticonscolor);
            margin-bottom: 81px;
          }
          .picker-param__status {
            position: absolute;
            width: 380px;
            max-height: ${isOpened ? 300 : 50}px;
            border-radius: 25px;
            box-shadow: 0 6px 32px -6px rgb(194, 197, 199);
            background-color: white;
            flex-direction: column;
            align-items: flex-start;
            overflow: hidden;
            transition: 0.3s ease;
            z-index: ${isOpened ? 800 : 10};
          }
          .picker-param__status-main {
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
          }
          .param__general-title {
            display: block;
            letter-spacing: 0.84px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .status-list__img-wrapper {
            position: relative;
          }
          .list-elem-active {
            color: var(--primarycolor);
          }
          .list-elem-active .status-list__img-wrapper:after {
            content: '';
            position: absolute;
            width: 44px;
            display: block;
            height: 44px;
            object-fit: contain;
            border: solid 1.5px #e15151;
            border-radius: 50%;
            margin-top: -45px;
            margin-left: -6px;
          }
          .status-list__img {
            height: 35px;
            width: 35px;
          }
          .list-elem {
            cursor: pointer;
            height: 39px;
          }
          .list-elem .status-list__img-wrapper:hover .status-list__img {
            position: absolute;
            width: 65px;
            height: 65px;
            margin: -34px 0px 0px -15px;
          }
          .list-elem
            > .status-list__img-wrapper:hover
            ~ .param__status-list__title {
            margin-left: 50px;
          }
          .picker-param__status-img {
            margin: 0 15px 0 21px;
          }
          .param__status-choose__title {
            margin-right: auto;
          }
          #picker-param__status-more {
            padding: 0;
            border-width: 0;
            height: 20px;
            width: 20px;
            cursor: pointer;
            background: transparent;
            outline: none;
            margin-right: 18px;
          }
          #picker-param__status-more:before {
            content: '';
            position: absolute;
            height: 9px;
            width: 16px;
            background-image: url('/img/wizard-picker/more-icon.svg');
            margin-left: 0px;
            margin: -4.5px 0 0 -8px;
            transition: 0.5s ease;
          }
          #picker-param__status-more:before {
            transform: ${isOpened ? 'rotate(180deg)' : ''};
          }
          .picker-param__status-list {
            list-style: none;
            width: 360px;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 20px;
            margin-bottom: 5px;
            max-height: 250px;
            overflow-y: auto;
          }
          .picker-param__status-list::-webkit-scrollbar-button {
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
            display: none;
          }

          .picker-param__status-list::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .picker-param__status-list::-webkit-scrollbar-thumb {
            -webkit-border-radius: 2, 5px;
            border-radius: 2.5px;
            background-color: #ced5e1;
          }

          .picker-param__status-list::-webkit-scrollbar-thumb:hover {
            background-color: #ced5e1;
          }

          .picker-param__status-list::-webkit-resizer {
            background-image: url('');
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
          }

          .picker-param__status-list::-webkit-scrollbar {
            width: 5px;
          }
          .picker-param__status-list li {
            font-size: 16px;
            letter-spacing: 0.84px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
          }
          .picker-param__status-list li:first-child {
            margin-top: 20px;
          }
          .param__status-list__title {
            margin-left: 15px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .wizard__picker-param {
              width: 335px;
            }
            .picker-param__status {
              width: 335px;
            }
            .list-elem .status-list__img-wrapper:hover .status-list__img {
              position: relative;
              height: 35px;
              width: 35px;
              margin: 0;
            }
            .list-elem
              > .status-list__img-wrapper:hover
              ~ .param__status-list__title {
              margin-left: 15px;
            }
            .picker-param__status-list li {
              margin-bottom: 17px;
            }
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizardPicker;
