import React, { useRef, useEffect } from "react"
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
  B2Green,
  B2LightGreen,
} from "../../../styles/helpers"

const Highlights = ({ data }) => {
  console.log("Highlights: ", data)
  const imageDisplay = getImage(
    data.highlightsSliderImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.highlightsSliderImage.altText

  const settings = {
    customPaging: function (i) {
      console.log(i)
      return <a>{data.highlightsSliderSlides[i].year}</a>
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }

  useEffect(() => {}, [])

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

        {/* <Slider
          ref={controlSlider}
          asNavFor={mainSlider}
          slidesToShow={data.highlightsSliderSlides.length}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {data.highlightsSliderSlides.map((slide, index) => {
            return (
              <div key={index}>
                <p>{slide.year}</p>
              </div>
            )
          })}
        </Slider> */}
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
    width: 75%;
    margin-right: 20%;
    margin-left: 5%;
    padding: 4rem;
    z-index: 10;
  }

  .main-slider {
    padding: 2rem 2rem 15rem;

    .slick-dots.slick-thumb {
      width: 100%;

      li {
        ${B2LightGreen};
        width: 5rem;

        a {
          ${B2LightGreen};
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
    width: calc(20%);

    h2 {
      ${H2LightBlue};
      position: relative;
      top: 260px;
      transform-origin: top left;
      transform: rotate(-90deg);
      text-align: right;

      span {
        display: block;
      }
    }
  }

  .content {
    width: calc(80%);

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
