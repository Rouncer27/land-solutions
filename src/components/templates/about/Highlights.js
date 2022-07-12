import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  H2White,
  H3White,
  fonts,
  H2LightBlue,
  B2LightGreen,
} from "../../../styles/helpers"

const Highlights = ({ data }) => {
  const imageDisplay = getImage(
    data.highlightsSliderImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.highlightsSliderImage.altText

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <p>
          <span>&#8592;</span>PREVIOUS HIGHLIGHT
        </p>
      </div>
    )
  }

  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <p>
          NEXT HIGHLIGHT <span>&#8594;</span>
        </p>
      </div>
    )
  }

  const settings = {
    customPaging: function (i) {
      console.log(i)
      return (
        <a href="#">
          <span className="dot-span">
            <span className="dot-span__dot">&#8226;</span>
          </span>
          <span className="tex-span">
            {data.highlightsSliderSlides[i].year}
          </span>
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <StyledSection>
      <div className="wrapper">
        <Slider className="main-slider" {...settings}>
          {data.highlightsSliderSlides.map((slide, index) => {
            return (
              <StyledSlide key={index}>
                <div className="date">
                  <h2>
                    <span>{slide.year}</span>
                    <span>Highlights</span>
                  </h2>
                </div>
                <div className="content">
                  <h3>{data.highlightsSliderTitle}</h3>
                  <ul>
                    {slide.points.map((point, index) => (
                      <li key={index}>{point.point}</li>
                    ))}
                  </ul>
                </div>
              </StyledSlide>
            )
          })}
        </Slider>
      </div>
      <div className="slide-bg-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="slide-bg-overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;

  .wrapper {
    position: relative;
    width: 95%;
    margin-left: 5%;
    padding: 4rem;
    z-index: 10;
  }

  .main-slider {
    padding: 2rem 2rem 12.5rem;

    .slick-arrow {
      top: auto;
      bottom: -10px;
      width: 165px;
      height: auto;
      z-index: 1000;

      &::before {
        display: none;
      }

      p {
        ${B2LightGreen};
        margin: 0;
      }
    }

    .slick-arrow.slick-prev {
      left: -10px;
    }

    .slick-arrow.slick-next {
    }

    .slick-dots.slick-thumb {
      width: 100%;
      bottom: -2.5px;

      li {
        ${B2LightGreen};
        position: relative;
        width: 5rem;

        .dot-span {
          display: block;
          position: absolute;
          top: -15px;
          left: 50%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          transform: translateX(-50%);

          &__dot {
            position: absolute;
            top: 10%;
            left: 55%;
            transform: translate(-50%, -50%);
            display: block;
            font-size: 36px;
          }
        }

        span {
          ${B2LightGreen};
        }
      }

      li.slick-active {
        .dot-span {
          box-shadow: 0px 0px 0px 7px rgba(255, 255, 255, 0.35);
        }
      }
    }
  }

  .slide-bg-overlay {
    position: absolute;
    top: 0;
    left: 5%;
    width: calc(100%);
    height: 100%;
    background-color: #033346;
    opacity: 0.85;
    z-index: 5;
  }

  .slide-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%);
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
`

const StyledSlide = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 10;

  .date {
    width: calc(15%);

    h2 {
      ${H2LightBlue};
      position: relative;
      top: 200px;
      transform-origin: top left;
      transform: rotate(-90deg);
      text-align: right;

      span {
        display: block;
      }
    }
  }

  .content {
    width: calc(85%);
    max-width: 75rem;
    margin-right: auto;
    margin-left: 0;

    h3 {
      ${H2White};
    }
    ul {
      margin-top: 3rem;

      li {
        ${H3White};
        position: relative;
        margin-bottom: 3rem;
        padding-left: 0.75em;

        &::before {
          font-family: ${fonts.fontAwesome};
          position: absolute;
          top: 1.75em;
          left: 0;
          padding-right: 0.75em;
          color: rgba($grey, 0.75);
          font-size: 0.75rem;
          content: "\f111";
        }
      }
    }
  }
`

export default Highlights
