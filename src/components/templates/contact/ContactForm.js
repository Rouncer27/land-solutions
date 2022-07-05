import React, { useState } from "react"
import styled from "styled-components"
import {
  H3Blue,
  standardWrapper,
  colors,
  B2OffBlack,
  fontSizer,
  Btn1One,
  B1OffBlack,
} from "../../../styles/helpers"

import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"

const ContactForm = ({ data }) => {
  const formId = data.pageContactFormContentFormId

  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    phone: "",
    projectType: "",
    location: "",
    howHelp: "",
    details: "",
    images: null,
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    try {
      const response = await submitToServer(formId, bodyFormData)

      if (!response.errors) {
        setFormStatus({
          ...formStatus,
          submitting: false,
          errorWarnDisplay: false,
          success: true,
          errors: [],
        })
      } else {
        setFormStatus({
          ...formStatus,
          submitting: false,
          errorWarnDisplay: true,
          success: false,
          errors: response.errorMessages,
        })
      }
    } catch (err) {
      console.log("ERROR: ", err)
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: [],
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })

    setFormData({
      yourName: "",
      yourEmail: "",
      phone: "",
      projectType: "",
      location: "",
      howHelp: "",
      details: "",
      images: null,
    })
  }

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="form">
          <div className="form__title">
            <div
              dangerouslySetInnerHTML={{ __html: data.pageContactFormContent }}
            />
          </div>

          <div className="form__container">
            <form onSubmit={handleOnSubmit}>
              <div className="form-left">
                <InputField>
                  <label htmlFor="yourName">
                    Name <span className="required">&#42;</span>
                    <span
                      className={`error-message ${
                        formStatus.errors.findIndex(
                          error => error.idref === "yourName"
                        ) !== -1 && " error-active"
                      }`}
                    >
                      You must input a name.
                    </span>
                    <input
                      name="yourName"
                      type="text"
                      value={formData.yourName}
                      id="yourName"
                      onChange={handleOnChange}
                      aria-required="true"
                      required
                    />
                  </label>
                </InputField>
                <InputField>
                  <label htmlFor="yourEmail">
                    Email <span className="required">&#42;</span>
                    <span
                      className={`error-message ${
                        formStatus.errors.findIndex(
                          error => error.idref === "yourEmail"
                        ) !== -1 && " error-active"
                      }`}
                    >
                      You must input a email.
                    </span>
                    <input
                      name="yourEmail"
                      type="email"
                      value={formData.yourEmail}
                      id="yourEmail"
                      onChange={handleOnChange}
                      aria-required="true"
                      required
                    />
                  </label>
                </InputField>

                <DropdownInputStyled>
                  <label htmlFor="sector">
                    What sector are you in?
                    <span className="required">&#42;</span>
                  </label>
                  <select
                    value={formData.sector}
                    name="sector"
                    id="sector"
                    onChange={handleOnChange}
                  >
                    <option value="">-- Please choose a sector --</option>
                    <option value="Telecommunications">
                      Telecommunications
                    </option>
                    <option value="Public Infrastructure">
                      Public Infrastructure
                    </option>
                    <option value="Power Generation, Transmission & Distribution">
                      Power Generation, Transmission & Distribution
                    </option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Midstream">Midstream</option>
                    <option value="Upstream">Retrofits/Upstream</option>
                  </select>
                </DropdownInputStyled>

                <InputField>
                  <label htmlFor="yourName">
                    Is there a location you want to speak about?
                    <span
                      className={`error-message ${
                        formStatus.errors.findIndex(
                          error => error.idref === "location"
                        ) !== -1 && " error-active"
                      }`}
                    >
                      You must input a location.
                    </span>
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      id="location"
                      onChange={handleOnChange}
                    />
                  </label>
                </InputField>
              </div>

              <div className="form-right">
                <InputField size="full">
                  <label htmlFor="howHelp">
                    How can we help you?<span className="required">&#42;</span>
                    <span
                      className={`error-message${
                        formStatus.errors.findIndex(
                          error => error.idref === "howHelp"
                        ) !== -1
                          ? " error-active"
                          : ""
                      }`}
                    >
                      Required Field
                    </span>
                    <textarea
                      name="howHelp"
                      value={formData.howHelp}
                      id="howHelp"
                      onChange={handleOnChange}
                      rows={8}
                      aria-required="true"
                      required
                    />
                  </label>
                </InputField>

                <InputField size="full">
                  <label htmlFor="details">
                    Additional Details
                    <span
                      className={`error-message${
                        formStatus.errors.findIndex(
                          error => error.idref === "details"
                        ) !== -1
                          ? " error-active"
                          : ""
                      }`}
                    >
                      Required Field
                    </span>
                    <textarea
                      name="details"
                      value={formData.details}
                      id="details"
                      onChange={handleOnChange}
                      rows={6}
                    />
                  </label>
                </InputField>
              </div>

              <div className="required-info">
                <p>&#42; required fields</p>
              </div>
              <div className="btn-submit">
                <button type="submit">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .form {
    width: 100%;

    @media (min-width: 768px) {
      width: 85%;
      margin-left: 15%;
    }

    &__title {
      width: 100%;

      p {
        ${H3Blue};
      }
    }

    &__container {
      position: relative;
      width: 100%;
      z-index: 10;

      form {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        width: calc(100%);

        .form-right {
          width: calc(100%);

          @media (min-width: 768px) {
            width: calc(50%);
          }
        }

        .form-left {
          width: calc(100%);

          @media (min-width: 768px) {
            width: calc(50%);
          }
        }

        .clear-images {
          ${Btn1One};
          margin: 0 2rem;
        }

        .required-info {
          position: absolute;
          left: 20rem;
          bottom: 1.5rem;

          p {
            ${B1OffBlack};
            font-weight: bold;
            margin: 0;
          }
        }

        .btn-submit {
          margin-top: 2.5rem;
          margin-left: 2rem;

          button {
            ${Btn1One};
          }
        }
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100%);
  margin: 1rem 0;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
  }

  .img-preview {
    flex-wrap: wrap;
    display: flex;

    .img-item {
      width: 5rem;
    }
  }

  .images-uploaded {
    ${B2OffBlack};
    ${fontSizer(1.2, 1.4, 76.8, 150, 1.4)};
    width: 100%;
    margin: 0;
  }

  label {
    ${B2OffBlack};
    display: block;
    width: 100%;
    font-weight: bold;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      color: #000;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      background-color: #fff;
      border: 0.25rem ${colors.colorAccent} solid;
      border-radius: 5px;
    }
  }
`

const DropdownInputStyled = styled.div`
  width: calc(100%);
  margin: 1rem 0;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
  }

  label {
    ${B2OffBlack};
    display: block;
    width: 100%;
    font-weight: bold;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }
  }

  select {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0.9rem 1rem;
    color: #000;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    background-color: #fff;
    border: 0.25rem ${colors.colorAccent} solid;
    border-radius: 5px;
  }
`

export default ContactForm
