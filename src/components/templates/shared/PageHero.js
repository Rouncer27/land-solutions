import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H1White, H2White, H3White } from "../../../styles/helpers"

const PageHero = ({ data }) => {
  const imageDisplay = getImage(
    data.pageHeroIntroImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroIntroImage.altText
  return (
    <SectionStyled>
      <div className="hero-content">
        <div className="hero-content__inner">
          <h1>{data.pageHeroIntroTitle}</h1>
          {data.pageHeroIntroSubTitle && <p>{data.pageHeroIntroSubTitle}</p>}
          {data.pageHeroIntroContent && (
            <p className="content">{data.pageHeroIntroContent}</p>
          )}
        </div>
      </div>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1025px) {
    height: 55rem;
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 51, 70, 0.7);
    z-index: 5;

    @media (min-width: 768px) {
      width: 80%;
      background: linear-gradient(
        255deg,
        rgba(0, 51, 70, 0.7) 81%,
        rgba(0, 0, 0, 0) 81%
      );
    }

    @media (min-width: 1025px) {
      width: 60%;
      height: 100%;
    }

    &__inner {
      padding-top: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
      padding-left: 2rem;

      @media (min-width: 768px) {
        padding-top: 0;
        padding-right: 5rem;
        padding-bottom: 0;
        padding-left: 25%;
      }

      @media (min-width: 1025px) {
        padding-left: 25%;
        padding-right: 5rem;
      }
    }

    h1 {
      ${H1White};
      text-transform: uppercase;
    }

    p {
      ${H2White};
      margin: 0;
    }

    p.content {
      ${H3White};
      margin-top: 2.5rem;
    }
  }

  .hero-image {
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
`

export default PageHero
