import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageStrip = ({ bgcolor, data }) => {
  return (
    <StyledSection bgcolor={bgcolor}>
      <div className="wrapper">
        {data.map((image, index) => {
          const imageDisplay = getImage(
            image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = image.altText
          return (
            <ImageWrap key={index}>
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </ImageWrap>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  background-color: ${props =>
    props.bgcolor ? "rgba(157, 181, 148, 0.1)" : "transparent"};
  padding-bottom: 2.5rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ImageWrap = styled.div`
  width: calc((100% / 2) - 1rem);
  margin: 0.5rem;

  @media (min-width: 768px) {
    width: calc((100% / 4) - 1rem);
    margin: auto 0.5rem;
  }
`

export default ImageStrip
