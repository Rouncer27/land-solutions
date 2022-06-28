import React from "react"
import styled from "styled-components"
import { medWrapper, H3Blue, H2Green } from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContentImage = ({ data }) => {
  const sideImgDisplay = getImage(
    data.contentWithImageImage.localFile.childImageSharp.gatsbyImageData
  )
  const sideImgAlt = data.contentWithImageImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content-wrap">
          <div className="content-wrap__content">
            <h2>{data.contentWithImageTitle}</h2>
            <div
              className="content-wrap__content--wysiwyg"
              dangerouslySetInnerHTML={{ __html: data.contentWithImageContent }}
            />
          </div>
        </div>
      </div>
      <div className="side-image">
        <GatsbyImage
          image={sideImgDisplay}
          alt={sideImgAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  margin-top: 5rem;

  .wrapper {
    ${medWrapper};
  }

  .side-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 25rem;
    height: 100%;
  }

  .content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 3.5rem;

    &__content {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(85%);
      }

      @media (min-width: 1025px) {
        width: calc(80%);
        margin-left: 20%;
      }

      h2 {
        ${H2Green};
      }

      &--wysiwyg {
        p {
          ${H3Blue};
        }
      }
    }
  }
`
export default ContentImage
