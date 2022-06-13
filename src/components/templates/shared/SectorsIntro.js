import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H2Blue, H2White, H3White } from "../../../styles/helpers"

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

const SectorsIntro = ({ sectors }) => {
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
                  </div>
                </div>
                <div className="content">
                  <h3>{sector.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sector.sectors.excerptContentIntro,
                    }}
                  />
                  <div>
                    <Link to={`/sectors/${sector.slug}`}>Learn More</Link>
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
  padding: 5rem 0;
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
    width: 100%;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      padding: 5rem 10rem;
    }

    h3 {
      ${H2White};
      text-transform: uppercase;
    }

    p {
      ${H3White};
    }
  }
`

export default SectorsIntro
