import React from "react"
import styled from "styled-components"
import { medWrapper, H3Blue, H2Green } from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContentImage = ({ bgcolor, data }) => {
  const sideImgDisplay = getImage(
    data.contentWithImageImage.localFile.childImageSharp.gatsbyImageData
  )
  const sideImgAlt = data.contentWithImageImage.altText
  return (
    <StyledSection bgcolor={bgcolor}>
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
  padding-bottom: 0;
  background-color: ${props =>
    props.bgcolor ? "rgba(157, 181, 148, 0.1)" : "transparent"};

  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media (min-width: 1025px) {
    padding-bottom: 5rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .side-image {
    display: none;
    position: absolute;
    top: 7.5rem;
    left: 0;
    width: 12.5rem;
    height: 100%;

    @media (min-width: 400px) {
      width: 15rem;
    }

    @media (min-width: 500px) {
      display: block;
    }

    @media (min-width: 768px) {
      top: 0;
      width: 18%;
    }

    @media (min-width: 1025px) {
      top: 0;
      width: 18%;
    }
  }

  .content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    margin-top: 3.5rem;
    margin-left: auto;

    @media (min-width: 500px) {
      width: 80%;
    }

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      justify-content: center;
    }

    &__content {
      width: calc(100%);

      @media (min-width: 400px) {
        width: calc(100%);
      }

      @media (min-width: 500px) {
        width: calc(85%);
        margin-left: 15%;
        margin-right: auto;
      }

      @media (min-width: 768px) {
        width: calc(75%);
        margin-left: 18.5%;
        margin-right: auto;
      }

      @media (min-width: 1025px) {
        width: calc(75%);
        margin-left: 18%;
        margin-right: auto;
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
