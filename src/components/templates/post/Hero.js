import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = ({ data }) => {
  const imageDisplay = getImage(data.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = data.altText
  return (
    <StyledHero>
      <div className="image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  width: 100%;
  min-height: 30rem;
  padding: 0;
  position: relative;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 60rem;
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

export default Hero
