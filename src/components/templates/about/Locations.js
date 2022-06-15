import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Btn1One,
  colors,
  H2Green,
  H2White,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"
const Locations = ({ data }) => {
  const imageDisplay = getImage(
    data.locationsLinkBackgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.locationsLinkBackgroundImage.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <h2>{data.locationsLinkTitle}</h2>
          <div>
            <Link to={`/${data.locationsLinkButtonSlug}`}>
              {data.locationsLinkButtonText}
            </Link>
          </div>
        </div>
      </div>
      <div className="location-bg-overlay" />
      <div className="location-bg-image">
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
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 8rem 0;
  }

  .wrapper {
    ${standardWrapper};
  }

  .location-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 51, 70, 0.8);
    z-index: 5;
  }

  .location-bg-image {
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

  .content {
    position: relative;
    width: 100%;
    border: 0.1rem solid ${colors.white};
    border-radius: 0.7rem;
    box-shadow: 2px 4px 7px 0 rgba(0, 0, 0, 0.16);
    z-index: 10;

    @media (min-width: 1025px) {
      padding: 3.5rem 10rem;
    }

    h2 {
      ${H2White};
      margin-bottom: 1.5rem;
    }

    a {
      ${Btn1One};
      text-transform: uppercase;
    }
  }
`

export default Locations
