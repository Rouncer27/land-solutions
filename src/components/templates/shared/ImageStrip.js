import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageStrip = ({ data }) => {
  console.log("ImageStrip: ", data)
  return (
    <StyledSection>
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
