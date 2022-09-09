import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import TextScrambled from "./TextScrambled"

const PageHeroAnimate = ({ data }) => {
  const imageDisplay = getImage(
    data.pageHeroAnimationImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroAnimationImage.altText

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          {data.pageHeroAnimationText.map((text, index) => (
            <TextScrambled key={index} text={text.text} index={index} />
          ))}
        </div>
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="overlay" />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    width: 100%;
    min-height: 30rem;
    position: relative;
    z-index: 100;

    @media (min-width: 768px) {
      min-height: 50rem;
    }

    @media (min-width: 1025px) {
      min-height: 70rem;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    z-index: 100;

    @media (min-width: 768px) {
    }

    @media (min-width: 1025px) {
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

export default PageHeroAnimate
