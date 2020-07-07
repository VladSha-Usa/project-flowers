import { Formik, Field } from 'formik';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';
import RespScreenWidth from '../common/mediaConst';

const BasketOrderForm = () => (
  <>
    <Formik
      initialValues={{ username: '', numTel: '' }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Будь ласка заповніть поле'),
        numTel: Yup.string()
          .matches(
            /^\(\+380\)\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
            'Неправильний формат номеру телефону'
          )
          .required('Будь ласка заповніть поле'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="order-form">
            <fieldset
              className={
                values.username === '' ||
                values.numTel === '' ||
                errors.username ||
                errors.numTel
                  ? 'order-form-disabled'
                  : null
              }
            >
              <legend className="intro-title">Оформити замовлення</legend>{' '}
              <p
                className="instruction-title"
                style={{
                  marginBottom: `${
                    (errors.username && touched.username) ||
                    (errors.numTel && touched.numTel)
                      ? '9px'
                      : '19px'
                  }`,
                }}
              >
                Залиште свої контактні дані і ми вам передзвонимо для оформлення
                замовлення{' '}
              </p>
              <div
                className="row"
                style={{
                  marginBottom: `${
                    errors.username && touched.username ? '13px' : '-1px'
                  }`,
                }}
              >
                <Field
                  id="username"
                  placeholder="Введіть своє ім’я"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
                <label htmlFor="username">Ім’я</label>
              </div>
              <div
                className="row"
                style={{
                  marginBottom: `${
                    errors.numTel && touched.numTel ? '13px' : '-1px'
                  }`,
                }}
              >
                <MaskedInput
                  mask={[
                    '(',
                    '+',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                  ]}
                  guide={false}
                  id="numTel"
                  placeholder="(+380) 23 456 78 90"
                  value={values.numTel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.numTel && touched.numTel
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.numTel && touched.numTel && (
                  <div className="input-feedback">{errors.numTel}</div>
                )}
                <label htmlFor="numTel">Телефон</label>
              </div>
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  values.username === '' ||
                  values.numTel === '' ||
                  errors.username ||
                  errors.numTel
                }
              >
                Оформити замовлення
              </button>
            </fieldset>
          </form>
        );
      }}
    </Formik>
    <style jsx>
      {`
        .order-form {
          font-family: Montserrat;
          font-style: normal;
          color: var(--texticonscolor);
        }
        .intro-title {
          font-size: 24px;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 1.26px;
          margin-bottom: 2px;
          margin-left: 5px;
        }
        .instruction-title {
          font-size: 17px;
          line-height: 1.53;
          letter-spacing: 0.89px;
          margin-left: 7px;
        }
        fieldset {
          border: none;
          padding: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }
        .row {
          display: flex;
          flex-direction: column-reverse;
          width: 380px;
        }
        .row label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.63px;
          margin-bottom: 4px;
        }
        .input-feedback {
          position: absolute;
          margin-top: 10px;
          height: 15px;
        }
        button {
          width: 380px;
          height: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 32px 0 rgba(13, 26, 113, 0.2);
          background-color: var(--primarycolor);
          cursor: pointer;
          border: none;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.75px;
          color: var(--white);
          text-transform: uppercase;
          font-family: Montserrat;
          margin-top: 6px;
          margin-left: 7px;
          outline: none;
        }
        button:disabled {
          background-color: #ced6e2;
          box-shadow: none;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .intro-title {
            margin-left: 0;
            padding-inline-start: 0;
            padding-inline-end: 0;
            margin: auto;
            text-align: center;
          }
          .instruction-title {
            margin-left: 0;
            text-align: center;
            padding: 0 35px;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .intro-title {
            font-size: 20px;
          }
          .instruction-title {
            padding: 0 30px;
          }
          .row {
            padding: 5px 0;
            width: auto;
            position: relative;
          }
          button {
            padding: 0;
            margin-left: 0;
            margin-top: 2px;
            width: 100%;
          }
          .instruction-title {
            margin-bottom: 16px;
          }
          .input-feedback {
            margin-top: 0;
          }
        }
      `}
    </style>
    <style>
      {`
          .order-form .text-input:focus {
            border: solid 1px var(--primarycolor);
          }
          .order-form .text-input:focus ~ label {
            color: var(--primarycolor);
          }
          .order-form .text-input:-webkit-autofill,
          .order-form .text-input:-webkit-autofill:hover,
          .order-form .text-input:-webkit-autofill:focus {
            border: 1px solid #020e2c;
            -webkit-text-fill-color: var(--texticonscolor);
            transition: background-color 5000s ease-in-out 0s;
          }
          ::-webkit-input-placeholder {
            color: #020e2c;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.84px;
          }
          ::-moz-placeholder {
            color: #020e2c;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.84px;
          }
          :-moz-placeholder {
            color: #020e2c;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.84px;
          }
          :-ms-input-placeholder {
            color: #020e2c;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.84px;
          }
          .order-form-disabled ::-webkit-input-placeholder {
            color: #b9c6dc;
          }
          .order-form-disabled ::-moz-placeholder {
             color: #b9c6dc;
          }
          .order-form-disabled :-moz-placeholder {
             color: #b9c6dc;
          }
          .order-form-disabled :-ms-input-placeholder {
             color: #b9c6dc;
          }
          .order-form .text-input {
            position: relative;
            width: calc(100% - 30px);
            height: 48px;
            border-radius: 12px;
            border: solid 1px #020e2c;
            padding: 0 15px 0 15px;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.84px;
            outline: none;
            margin-bottom: 10px;
          }
          .order-form-disabled .text-input {
            border-color: #b9c6dc;
          }
          .error {
            border-color: #d21818 !important;
          }
          .error ~ .input-feedback {
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.63px;
            color: #d21818;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px){
            .order-form{
              width: 394px
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px){
            .order-form{
              width: auto
            }
            .order-form .text-input {
              width: auto;
              margin-bottom: 23px;
            }
          }
        `}
    </style>
  </>
);
export default BasketOrderForm;
