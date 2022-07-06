import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H3White } from "../../../styles/helpers"

const QuoteHero = ({ data }) => {
  console.log("Data: ", data)
  const imageDisplay = getImage(
    data.pageHeroQuoteImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroQuoteImage.altText
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
            <span className="quote-left">&#8220;</span> {data.pageHeroQuote}{" "}
            <span className="quote-left">&#8221;</span>
          </p>
          <p>
            <span>&#8211;</span> {data.pageHeroQuoteAuthor}
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
    padding: 2rem;
    z-index: 10;
    background: rgba(0, 51, 70, 0.7);

    @media (min-width: 768px) {
      width: 75%;
      padding: 0;
      padding-left: 15%;
      padding-right: 2rem;
      background: linear-gradient(
        255deg,
        rgba(0, 51, 70, 0.7) 81%,
        rgba(0, 0, 0, 0) 81%
      );
    }

    @media (min-width: 1025px) {
      width: 65%;
      padding-left: 20%;
    }

    p {
      ${H3White};

      &:last-of-type {
        margin: 0;
      }
    }
  }
`

export default QuoteHero
