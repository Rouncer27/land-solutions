import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H1White } from "../../../styles/helpers"

const PageHeroAnimate = ({ data }) => {
  console.log("PageHeroAnimate: ", data)
  const imageDisplay = getImage(
    data.pageHeroAnimationImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroAnimationImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          {data.pageHeroAnimationText.map((text, index) => {
            return (
              <div className="text-item" key={index}>
                <p>{text.text}</p>
              </div>
            )
          })}
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

    .text-item {
      width: 100%;
    }

    p {
      ${H1White};
      margin: 0;
      padding: 0;
      font-weight: 300;
      text-transform: uppercase;
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
