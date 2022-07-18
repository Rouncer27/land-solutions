import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const VideoSection = ({ data }) => {
  const imageDisplay = getImage(
    data.pageVideoSection.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageVideoSection.altText
  return (
    <StyledSection>
      <DivStyled>
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </DivStyled>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 30rem;

  @media (min-width: 768px) {
    height: 55rem;
  }

  @media (min-width: 1025px) {
    min-height: 67.5rem;
  }
`

const DivStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default VideoSection
