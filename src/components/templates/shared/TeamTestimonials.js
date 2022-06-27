import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1White, colors } from "../../../styles/helpers"

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

const TeamTestimonials = ({ data, testimonials }) => {
  const imageDisplay = getImage(
    data.teamTestimonialsBackgroundImage.localFile.childImageSharp
      .gatsbyImageData
  )
  const imageAlt = data.teamTestimonialsBackgroundImage.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <Slider {...settings}>
          {testimonials.map((slide, index) => {
            const testimonial = slide.node
            return (
              <Slide key={index}>
                <div className="content">
                  <div className="content__wrapper">
                    <span className="quote quote-left">&#8220;</span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: testimonial.testimonials.testimonialContent,
                      }}
                    />
                    <span className="quote quote-right">&#8221;</span>
                    <div className="image__title">
                      <p>
                        <span>&#8211;</span> {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="spacer" />
              </Slide>
            )
          })}
        </Slider>
        <div className="test-bg">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0 0;

  .wrapper {
    position: relative;
  }

  .slick-slider {
    .slick-dots {
      bottom: 5rem;
      left: 0%;

      @media (min-width: 768px) {
        bottom: 5rem;
        left: 5%;
        display: flex !important;
        justify-content: flex-start;
      }

      @media (min-width: 1025px) {
        bottom: 5rem;
      }

      @media (min-width: 1200px) {
        bottom: 5rem;
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

  .test-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

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

const Slide = styled.div`
  width: 100%;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    min-height: 55rem;
    background-color: rgba(3, 51, 70, 0.75);

    @media (min-width: 768px) {
      width: calc(50%);
      min-height: 60rem;
    }

    @media (min-width: 1025px) {
      min-height: 50rem;
    }

    &__wrapper {
      position: relative;
      max-width: 58.5rem;
      margin-left: auto;
      padding: 10rem 8rem 10rem 2rem;

      .quote {
        position: absolute;
        top: 0;
        font-size: 9.5rem;
        color: ${colors.colorTertiary};
      }

      .quote-left {
        left: 0;
      }

      .quote-right {
        right: 8rem;
      }

      p {
        ${B1White};
      }
    }
  }

  .spacer {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

export default TeamTestimonials
