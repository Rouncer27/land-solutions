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
    top: 7.5rem;
    left: 0;
    width: 12.5rem;
    height: 100%;

    @media (min-width: 400px) {
      width: 15rem;
    }

    @media (min-width: 768px) {
      top: 0;
      width: 20rem;
    }

    @media (min-width: 1025px) {
      top: 0;
      width: 25rem;
    }
  }

  .content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    margin-top: 3.5rem;

    @media (min-width: 768px) {
    }

    @media (min-width: 1025px) {
      justify-content: center;
    }

    &__content {
      width: calc(65%);
      margin-left: 35%;

      @media (min-width: 400px) {
        width: calc(70%);
        margin-left: 30%;
      }

      @media (min-width: 768px) {
        width: calc(75%);
        margin-left: 25%;
      }

      @media (min-width: 1025px) {
        width: calc(75%);
        margin-left: 25%;
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
