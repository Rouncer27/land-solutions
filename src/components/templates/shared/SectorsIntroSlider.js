import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  Btn1Two,
  colors,
  H2Blue,
  H2White,
  H3White,
} from "../../../styles/helpers"

import mImg from "../../../images/letters/m-sector.png"
import pImg from "../../../images/letters/p-sector.png"
import rImg from "../../../images/letters/r-sector.png"
import tImg from "../../../images/letters/t-sector.png"
import uImg from "../../../images/letters/u-sector.png"

const SectorsIntroSlider = ({ sectors }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 15000,
    centerPadding: "0",
    arrows: true,
    dots: true,
  }

  return (
    <SectionStyled>
      <div className="wrapper">
        <Slider {...settings}>
          {sectors.map((slide, index) => {
            const sector = slide.node
            const imageDisplay = getImage(
              sector.sectors.excerptContentImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = sector.sectors.excerptContentImage.altText

            return (
              <Slide key={index} bgimage={sector.sectors.sectorLetter}>
                <div className="image">
                  <div className="image__wrapper">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                    <div className="hero-image-overlay" />
                  </div>
                </div>
                <div className="content">
                  <div className="content__inner">
                    <div className="image__title">
                      <p>{sector.sectors.excerptContentImageTitle}</p>
                    </div>
                    <div className="content__title">
                      <h3>{sector.title}</h3>
                    </div>
                    <div
                      className="content__paragraph"
                      dangerouslySetInnerHTML={{
                        __html: sector.sectors.excerptContentIntro,
                      }}
                    />
                    <div className="content__link">
                      <Link to={`/sectors/${sector.slug}`}>Learn More</Link>
                    </div>
                  </div>
                </div>
              </Slide>
            )
          })}
        </Slider>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  padding: 0 0;

  .wrapper {
    position: relative;
    padding: 0rem 0rem;
    overflow: hidden;
  }

  .test-button {
    margin: 5rem;
  }

  .slick-slider {
    .slick-dots {
      bottom: 5rem;
      left: 0%;

      @media (min-width: 768px) {
        bottom: 5rem;
        left: 25%;
      }

      @media (min-width: 1025px) {
        bottom: 5rem;
        left: 15%;
      }

      @media (min-width: 1200px) {
        bottom: 5rem;
        left: 15%;
      }

      li {
        button {
          width: 20px;
          height: 20px;

          &::before {
            width: 20px;
            height: 20px;
            font-size: 11px;
            opacity: 1;
            color: ${colors.colorTertiary};
          }
        }

        &.slick-active {
          button {
            &::before {
              color: ${colors.colorAccent};
            }
          }
        }
      }
    }
  }
`

const Slide = styled.div`
  width: 100%;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 100vw;

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 30vw;
    }

    @media (min-width: 1025px) {
      display: block;
      width: calc(40%);
      min-height: 46vw;
    }

    @media (min-width: 1200px) {
      min-height: 46vw;
    }

    &__title {
      position: relative;
      width: 100%;
      margin: 0;
      opacity: 0.7;
      z-index: 100;

      p {
        ${H3White};
        margin-bottom: 2rem;

        @media (min-width: 1025px) {
          font-weight: 300;
        }
      }
    }

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

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
        z-index: 50;
      }

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
  }

  .content {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 50rem;
    padding: 7.5rem 2rem 12.5rem;
    background-color: ${colors.colorPrimary};
    z-index: 100;

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 50rem;
      padding: 5rem 2rem 12rem 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(60%);
      min-height: auto;
      padding: 12rem 10rem;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    &__title,
    &__paragraph,
    &__link {
      width: 100%;
    }

    h3 {
      ${H2White};
      text-transform: uppercase;
    }

    p {
      ${H3White};
    }

    a {
      ${Btn1Two};
      text-transform: uppercase;
    }
  }
`

export default SectorsIntroSlider
