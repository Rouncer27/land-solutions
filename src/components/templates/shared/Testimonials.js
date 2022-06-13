import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1White } from "../../../styles/helpers"

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

const Testimonials = ({ data, testimonials }) => {
  console.log("data: ", data)
  const imageDisplay = getImage(
    data.displayTestimonialsBackgroundImage.localFile.childImageSharp
      .gatsbyImageData
  )
  const imageAlt = data.displayTestimonialsBackgroundImage.altText
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: testimonial.testimonials.testimonialContent,
                      }}
                    />
                    <div className="image__title">
                      <p>{testimonial.title}</p>
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
  padding: 5rem 0;

  .wrapper {
    position: relative;
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
    position: relative;
    width: 100%;
    background-color: rgba(3, 51, 70, 0.75);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__wrapper {
      max-width: 58.5rem;
      margin-left: auto;
      padding: 10rem 8rem 10rem 2rem;

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

export default Testimonials
