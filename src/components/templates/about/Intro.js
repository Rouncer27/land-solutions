import React from "react"
import styled from "styled-components"
import {
  B1Black,
  H1Blue,
  H2Green,
  H3Blue,
  medWrapper,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Intro = ({ data }) => {
  const iconDisplay = getImage(
    data.aboutIntroIcon.localFile.childImageSharp.gatsbyImageData
  )
  const iconAlt = data.aboutIntroIcon.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="intro-title">
          <h1>{data.aboutIntroTitle}</h1>
        </div>
        <div className="intro-icon">
          <GatsbyImage
            image={iconDisplay}
            alt={iconAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
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
    margin-bottom: 4rem;

    h1 {
      ${H1Blue};
      text-transform: uppercase;
    }
  }

  .intro-icon {
    width: 100%;
    max-width: 15rem;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      width: calc(15% - 2rem);
      max-width: 100%;
      margin-right: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(10% - 2rem);
      margin-right: 2rem;
    }
  }

  .intro-content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(85% - 3rem);
      margin-left: 3rem;
    }

    @media (min-width: 1025px) {
      width: calc(90% - 3rem);
      margin-left: 3rem;
    }

    @media (min-width: 1025px) {
    }

    &__sub-title {
      h2 {
        ${H2Green};
        margin-top: 0;
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
