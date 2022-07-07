import React from "react"
import styled from "styled-components"
import {
  H3White,
  medWrapper,
  colors,
  B1White,
  H1White,
  H2White,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Intro = ({ data }) => {
  console.log("Intro: ", data)
  const imageDisplay = getImage(
    data.allSectorIntroIcon.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.allSectorIntroIcon.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <div className="title__main">
            <h1
              dangerouslySetInnerHTML={{ __html: data.allSectorIntroTitle }}
            />
          </div>
          <div className="title__content">
            <div className="title__content--icon">
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
            <div className="title__content--para">
              <p
                dangerouslySetInnerHTML={{
                  __html: data.allSectorIntroSubTitle,
                }}
              />
            </div>
          </div>
        </div>

        <div className="content">
          <div
            className="content__large"
            dangerouslySetInnerHTML={{
              __html: data.allSectorIntroLargeContent,
            }}
          />
          <div
            className="content__small"
            dangerouslySetInnerHTML={{ __html: data.allSectorIntroContent }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 4rem 0;
  background-color: ${colors.colorPrimary};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 10rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      width: 30%;
    }

    @media (min-width: 1025px) {
      width: calc(30% - 8rem);
      margin-left: 6rem;
      margin-right: 2rem;
    }

    &__main {
      width: calc(100%);

      h1 {
        ${H1White};
        margin-bottom: 0;
        text-align: right;
        text-transform: uppercase;
      }
    }

    &__content {
      width: calc(100%);
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;

      &--icon {
        width: calc(20%);
      }

      &--para {
        width: calc(80%);

        p {
          ${H2White};
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 300;
          text-align: right;
        }
      }
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(70% - 2rem);
      margin-left: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(70% - 8rem);
      margin-left: 3rem;
      margin-right: 5rem;
    }

    &__large {
      p {
        ${H3White};
      }
    }

    &__small {
      p {
        ${B1White};
      }
    }
  }
`

export default Intro
