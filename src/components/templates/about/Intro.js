import React from "react"
import styled from "styled-components"
import {
  B1Black,
  H1Blue,
  H2Green,
  H3Blue,
  medWrapper,
} from "../../../styles/helpers"

const Intro = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="intro-title">
          <h1>{data.aboutIntroTitle}</h1>
        </div>
        <div className="intro-content">
          <div className="intro-content__sub-title">
            <h2>{data.aboutIntroSubTitle}</h2>
          </div>
          <div className="intro-content__bold-title">
            <p>{data.aboutIntroBlueTitle}</p>
          </div>
          <div
            className="intro-content__bold-text"
            dangerouslySetInnerHTML={{ __html: data.aboutIntroBoldText }}
          />
          <div
            className="intro-content__main-content"
            dangerouslySetInnerHTML={{ __html: data.aboutIntroContent }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .intro-title {
    width: 100%;

    h1 {
      ${H1Blue};
      text-transform: uppercase;
    }
  }

  .intro-content {
    width: 100%;

    @media (min-width: 768px) {
      padding-left: 7.5rem;
    }

    @media (min-width: 1025px) {
      padding-left: 15rem;
    }

    &__sub-title {
      h2 {
        ${H2Green};
      }
    }

    &__bold-title {
      p {
        ${H3Blue};
      }
    }

    &__bold-text {
      p {
        ${B1Black};
        font-weight: bold;
      }
    }

    &__main-content {
      p {
        ${B1Black};
      }
    }
  }
`

export default Intro
