import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H3White } from "../../../styles/helpers"

const PageHeroQuote = ({ data }) => {
  const imageDisplay = getImage(
    data.pageHeroCenterQuoteImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroCenterQuoteImage.altText
  return (
    <SectionStyled>
      <div className="image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="quote">
        <div className="quote__inner">
          <p>
            <span className="quote-left">&#8220;</span>
            {data.pageHeroCenterQuoteContent}
            <span className="quote-left">&#8221;</span>
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  height: 40rem;

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 1025px) {
    height: 55rem;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

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

  .quote {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 51, 70, 0.75);

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 100%;
    }

    &__inner {
      width: 100%;
      max-width: 75rem;
      margin: 2rem auto;
      padding: 2rem;

      @media (min-width: 768px) {
        padding: 0;
      }
    }

    p {
      ${H3White};
      font-weight: normal;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`

export default PageHeroQuote
