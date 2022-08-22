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
  medWrapper,
} from "../../../styles/helpers"

const HighlightsTwo = ({ data }) => {
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

        <div className="slide-bg-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="slide-bg-overlay" />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    position: relative;
    padding-top: 12.5rem;
    padding-bottom: 12.5rem;
  }

  .slide-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    z-index: 1;
  }

  .main-slider {
    position: relative;
    width: calc(80%);
    max-width: 100%;
    margin-left: 20%;
    z-index: 10;
  }
`

const StyledSlide = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  background-color: rgba(3, 51, 70, 0.9);
  z-index: 10;

  @media (min-width: 768px) {
    min-height: 51rem;
    padding: 4rem 2rem;
  }

  .date {
    position: absolute;
    top: 4rem;
    left: 2rem;
    transform-origin: top left;
    transform: rotate(-90deg) translateX(-110%);
    text-align: right;

    h2 {
      ${H2White};
      margin: 0;

      @media (min-width: 768px) {
        position: relative;
      }

      span {
        display: block;
      }
    }
  }

  .content {
    width: 75%;
    margin-left: 25%;

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

export default HighlightsTwo
