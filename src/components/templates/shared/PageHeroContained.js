import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  Btn1One,
  Btn1Three,
  H3White,
  medWrapper,
} from "../../../styles/helpers"

const PageHeroContained = ({ bgcolor, data }) => {
  const imageDisplay = getImage(
    data.pageHeroContainedImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroContainedImage.altText
  return (
    <StyledSection bgcolor={bgcolor}>
      <div className="wrapper">
        <div className="content">
          <div className="content__inner">
            <div
              dangerouslySetInnerHTML={{
                __html: data.pageHeroContainedContent,
              }}
            />
            <div>
              <Link to={`/${data.pageHeroContainedSlug}`}>
                {data.pageHeroContainedButtonText}
              </Link>
              {data.pageHeroContainedSecondButtonRequired && (
                <>
                  {data.pageHeroContainedSecondButtonType === "external" ? (
                    <a
                      className="btn-two"
                      target="_blank"
                      rel="noreferrer"
                      href={data.pageHeroContainedSecondButtonUrl}
                    >
                      {data.pageHeroContainedSecondButtonText}
                    </a>
                  ) : (
                    <Link
                      className="btn-two"
                      to={`/${data.pageHeroContainedSecondButtonSlug}`}
                    >
                      {data.pageHeroContainedSecondButtonText}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 0 2rem 5rem;
  background-color: ${props =>
    props.bgcolor ? "rgba(157, 181, 148, 0.1)" : "transparent"};

  .wrapper {
    ${medWrapper};
    min-height: 30rem;

    position: relative;

    @media (min-width: 768px) {
      min-height: 50rem;
    }

    @media (min-width: 1025px) {
      min-height: 60rem;
      max-width: 119rem !important;
    }
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 51, 70, 0.7);
    z-index: 100;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 85%;
      background: linear-gradient(
        258deg,
        rgba(0, 51, 70, 0.7) 85%,
        rgba(0, 0, 0, 0) 85%
      );
    }

    @media (min-width: 1025px) {
      width: 65%;
      background: linear-gradient(
        258deg,
        rgba(0, 51, 70, 0.7) 85%,
        rgba(0, 0, 0, 0) 85%
      );
    }

    &__inner {
      padding: 4rem 2rem;

      @media (min-width: 768px) {
        padding-top: 2rem;
        padding-right: 6rem;
        padding-bottom: 2rem;
        padding-left: 17.5rem;
      }

      p {
        ${H3White};
      }

      a {
        ${Btn1Three};
      }

      a.btn-two {
        ${Btn1One};
        margin-left: 1rem;
      }
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100%);
      height: 100%;

      img {
        width: 100% !important;
      }
    }
  }
`

export default PageHeroContained
