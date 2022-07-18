import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White, H2LightBlue, H3White } from "../../../styles/helpers"

import mImg from "../../../images/letters/m-sector.png"
import pImg from "../../../images/letters/p-sector.png"
import rImg from "../../../images/letters/r-sector.png"
import tImg from "../../../images/letters/t-sector.png"
import uImg from "../../../images/letters/u-sector.png"

const HeroIntro = ({ data, title }) => {
  const image = getImage(
    data?.sectorHeroImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.sectorHeroImage?.altText
  const icon = getImage(
    data?.sectorHeroIcon?.localFile?.childImageSharp?.gatsbyImageData
  )
  return (
    <StyledSection bgimage={data.sectorHeroLetter}>
      <div className="wrapper">
        <div className="image">
          <div className="hero-image-overlay" />
          <div className="hero-image-wrapper">
            <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
          </div>
        </div>
        <div className="content">
          <div className="content__wrapper">
            <div className="content__icon">
              <GatsbyImage image={icon} alt={title} layout="fixed" />
            </div>
            <div className="content__title">
              <h1>{title}</h1>
              <p>{data.sectorHeroSubTitle}</p>
            </div>
            <div className="content__paragraph">
              <p>{data.sectorHeroContent}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    width: 100%;
    min-height: 45rem;

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 35rem;
    }

    .hero-image-wrapper {
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

    .hero-image-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url(${props =>
        props.bgimage === "m"
          ? mImg
          : props.bgimage === "p"
          ? pImg
          : props.bgimage === "r"
          ? rImg
          : props.bgimage === "t"
          ? tImg
          : props.bgimage === "u"
          ? uImg
          : uImg});
      background-size: 100% 100%;
      background-position: center bottom;
      background-repeat: no-repeat;
      z-index: 999999;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 4rem 5rem;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 50rem;
      padding: 10rem 8rem;
    }

    @media (min-width: 1025px) {
      min-height: 75rem;
    }

    &__wrapper {
      width: 100%;

      @media (min-width: 768px) {
      }

      @media (min-width: 1025px) {
        max-width: 37.5rem;
        margin-right: auto;
        margin-left: 0;
      }
    }

    &__icon {
      width: 7.5rem;
    }

    &__title {
      h1 {
        ${H1White};
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      p {
        ${H2LightBlue};
        margin-bottom: 4rem;
        font-weight: normal;
      }
    }

    &__paragraph {
      ${H3White};
      margin: 0;
    }
  }
`

export default HeroIntro
