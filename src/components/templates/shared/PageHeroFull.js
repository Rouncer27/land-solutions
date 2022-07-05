import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H3Black, H3White } from "../../../styles/helpers"

const PageHeroFull = ({ data }) => {
  const imageDisplay = getImage(
    data.pageFullHeroImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageFullHeroImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: data.pageFullHeroContent,
            }}
          />
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
  .wrapper {
    width: 100%;
    min-height: 30rem;
    padding: 0;
    position: relative;

    @media (min-width: 768px) {
      min-height: 50rem;
    }

    @media (min-width: 1025px) {
      min-height: 70rem;
    }
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2rem;
    z-index: 100;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 47.5rem;
      top: 9rem;
      right: 5%;
      padding: 0;
    }

    @media (min-width: 1025px) {
      width: 47.5rem;
      top: 9rem;
      right: 10%;
    }

    p {
      ${H3Black};

      @media (min-width: 768px) {
        ${H3White};
      }
    }
  }

  .image {
    @media (min-width: 768px) {
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
  }
`

export default PageHeroFull
