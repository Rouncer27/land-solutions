import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import KUTE from "kute.js"
import styled from "styled-components"
import {
  Btn1Two,
  colors,
  H2Blue,
  H2White,
  H3White,
} from "../../../styles/helpers"

import Letters from "./Letters"

const SectorsIntro = ({ sectors }) => {
  const [activeLetter, setActiveLetter] = useState("t")

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
    beforeChange: (current, next) =>
      setActiveLetter(sectors[next].node.sectors.sectorLetter),
  }

  useEffect(() => {
    setActiveLetter(sectors[0].node.sectors.sectorLetter)
  }, [])

  useEffect(() => {
    KUTE.to(`#display`, { path: `#${activeLetter}` }).start()
  }, [activeLetter])

  console.log("activeLetter: ", activeLetter)

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
              <Slide key={index}>
                <div className="image">
                  <div className="image__title">
                    <p>{sector.sectors.excerptContentImageTitle}</p>
                  </div>
                  <div className="image__wrapper">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                    <div className="image__wrapper--overlay" />
                  </div>
                </div>
                <div className="content">
                  <div className="content__inner">
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
      <div className="letter-div"></div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipping">
            <path
              fill="#000"
              id="display"
              d="M590 5.85v484.9c0 166.14-52.26 223.71-148.69 223.71-95.08 0-144.68-57.57-144.68-223.71V5.85H89V468c0 294.73 120.56 426 352.3 426s348.32-131.29 348.32-426V5.85z"
            ></path>
          </clipPath>
        </defs>

        <path
          id="t"
          fill="#000"
          style={{ visibility: "hidden" }}
          d="M90.14 5.95L90.14 183.29 331.6 183.29 331.6 894 543.03 894 543.03 183.29 784.49 183.29 784.49 5.95 90.14 5.95z"
        ></path>

        <path
          id="u"
          style={{ visibility: "hidden" }}
          d="M590 5.85v484.9c0 166.14-52.26 223.71-148.69 223.71-95.08 0-144.68-57.57-144.68-223.71V5.85H89V468c0 294.73 120.56 426 352.3 426s348.32-131.29 348.32-426V5.85z"
        ></path>
        <path
          id="m"
          style={{ visibility: "hidden" }}
          d="M627.64 6L492.75 391.61c-17.75 51.77-31.34 104.91-47.69 160.77h-5.45c-16.34-55.86-31.33-109-47.68-160.77L251.59 6H20v887h190.72V585.08c0-87.2-17.71-238.44-28.61-325.63h5.44l70.85 231.62 118.54 327h119.9l119.9-327 73.57-231.62h5.45c-10.9 87.19-28.61 238.43-28.61 325.63V893h192.11V6z"
        ></path>
        <path
          id="r"
          style={{ visibility: "hidden" }}
          d="M578.56 541c91.14-43.54 152.36-126.52 152.36-255.75 0-213.55-157.8-278.84-345.53-278.84H60.26V892h212.22V580.48h3.1V413.15h-3.1V173.73h96.58c100.67 0 155.08 27.21 155.08 111.55s-54.41 127.87-155.08 127.87h-93.48v167.33h100.29L539.11 892h236.7z"
        ></path>
        <path
          id="p"
          style={{ visibility: "hidden" }}
          d="M380 6.41H68.5V892h212.22V173.73h87.06c103.39 0 159.16 31.29 159.16 119.72S478 430.84 373.22 430.84h-92.5v167.32h104.74c186.37 0 348.25-92.5 348.25-304.71C733.71 75.79 574.55 6.41 380 6.41z"
        ></path>
      </svg>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  padding: 0 0;

  .wrapper {
    position: relative;
    padding: 0rem 0rem;
  }

  .test-button {
    margin: 5rem;
  }

  .letter-div {
    position: absolute;
    top: -56px;
    left: -165px;
    width: 88rem;
    height: 90rem;
    clip-path: url(#clipping);
    -webkit-clip-path: url(#clipping);
    aspect-ratio: 1/1;
    object-fit: cover;
    margin: auto;
    background-color: #fff;
    opacity: 0.75;
    transform: scale(0.5);
  }

  .slick-slider {
    .slick-dots {
      bottom: 10rem;
      left: 15%;
    }
  }
`

const Slide = styled.div`
  width: 100%;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(40%);
      min-height: 46vw;
    }

    &__title {
      position: relative;
      max-width: 55rem;
      margin: auto;
      padding: 3rem;
      z-index: 100;

      p {
        ${H2Blue};
        font-weight: 300;
      }
    }

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &--overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
    display: flex;
    width: 100%;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(60%);
      padding: 5rem 10rem;
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

export default SectorsIntro
