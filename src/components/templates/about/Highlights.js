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
          <span indexdot={i} className="dot-span">
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
  margin-bottom: 0.3rem;

  .wrapper {
    position: relative;
    width: 100%;
    padding: 0;
    z-index: 10;

    @media (min-width: 768px) {
      padding: 4rem;
    }
  }

  .main-slider {
    padding: 2rem 2rem 10rem;

    @media (min-width: 768px) {
      padding: 2rem 2rem 5rem;
    }

    @media (min-width: 1025px) {
      padding: 2rem 2rem 17.5rem;
    }

    @media (min-width: 1300px) {
      padding: 2rem 2rem 15rem;
    }

    .slick-arrow {
      top: auto;
      bottom: 10px;
      width: 200px;
      height: auto;
      z-index: 1000;

      @media (min-width: 768px) {
        bottom: 10px;
        width: 165px;
      }

      @media (min-width: 1300px) {
        bottom: 35px;
      }

      &::before {
        display: none;
      }

      p {
        ${B2LightGreen};
        margin: 0;
      }
    }

    .slick-arrow.slick-prev {
      left: 5%;

      @media (min-width: 1025px) {
        left: 6%;
      }

      @media (min-width: 1300px) {
        left: 7.5%;
      }
    }

    .slick-arrow.slick-next {
      right: -25px;

      @media (min-width: 768px) {
        right: -25px;
      }
    }

    .slick-dots.slick-thumb {
      width: 100%;

      @media (min-width: 1025px) {
        bottom: 75px;
      }

      @media (min-width: 1300px) {
        bottom: 20px;
      }

      li {
        ${B2LightGreen};
        display: none;
        position: relative;
        width: 5rem;

        @media (min-width: 1025px) {
          display: inline-block;
        }

        .dot-span {
          display: block;
          position: absolute;
          top: -15px;
          left: 50%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          transform: translateX(-50%);

          &::after {
            position: absolute;
            top: 50%;
            right: 0;
            width: 60px;
            height: 1px;
            transform: translateY(-50%);
            background-color: #9db594;
            content: "";
          }

          &[indexdot="0"] {
            &::after {
              display: none;
            }
          }

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
    left: 0;
    width: calc(100%);
    height: 100%;
    background-color: #033346;
    opacity: 0.85;
    z-index: 5;

    @media (min-width: 768px) {
      left: 5%;
    }
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
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(15%);
      padding: 0 2rem;
    }

    h2 {
      ${H2LightBlue};

      @media (min-width: 768px) {
        position: relative;
        top: 200px;
        width: 200px;
        transform-origin: top left;
        transform: rotate(-90deg);
        text-align: right;
      }

      span {
        display: block;
      }
    }
  }

  .content {
    width: calc(100%);
    @media (min-width: 768px) {
      width: calc(85%);
      max-width: 75rem;
      margin-right: auto;
      margin-left: 0;
    }

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
