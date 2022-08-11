import React, { useEffect } from "react"
import styled from "styled-components"
import {
  H3White,
  medWrapper,
  colors,
  B1White,
  H1White,
  H2White,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import letter from "../../../images/letters/main-l.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Intro = ({ data }) => {
  const imageDisplay = getImage(
    data.allSectorIntroIcon.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.allSectorIntroIcon.altText
  useEffect(() => {
    const letterL = document.querySelector(".letter-l")
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#intro-div-trigger`,
          markers: false,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        letterL,
        { autoAlpha: 0, y: 300 },
        { autoAlpha: 1, y: 0, duration: 2 }
      )
  }, [])
  return (
    <StyledSection id="intro-div-trigger">
      <div className="wrapper">
        <div className="title">
          <div className="title__main">
            <h1
              dangerouslySetInnerHTML={{ __html: data.allSectorIntroTitle }}
            />
          </div>
          <div className="title__content">
            <div className="title__content--icon">
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div
            className="content__large"
            dangerouslySetInnerHTML={{
              __html: data.allSectorIntroLargeContent,
            }}
          />
        </div>
      </div>
      <div className="letter-l" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding: 4rem 0 0;
  background-color: ${colors.colorPrimary};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 10rem 0;
  }

  @media (min-width: 1250px) {
    padding: 10rem 0 15rem;
  }

  .letter-l {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 17.5rem;
    height: 100%;
    background-image: url(${letter});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center 12.5%;
    z-index: 5;

    @media (min-width: 768px) {
      display: block;
      top: 10%;
      width: 25vw;
      height: 100%;
      background-position: center;
    }

    @media (min-width: 1025px) {
      top: 12.5%;
      width: 20vw;
    }
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      width: 30%;
    }

    @media (min-width: 1025px) {
      width: calc(35% - 8rem);
      margin-left: 6rem;
      margin-right: 2rem;
    }

    &__main {
      width: calc(100%);

      h1 {
        ${H1White};
        margin-bottom: 0;
        text-align: center;
        text-transform: uppercase;

        @media (min-width: 768px) {
          text-align: right;
        }
      }
    }

    &__content {
      width: calc(100%);
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;

      &--icon {
        width: calc(100%);
        max-width: 10rem;
        margin: auto;
        padding-left: 2rem;
        padding-bottom: 0;
        padding-right: 0;

        @media (min-width: 768px) {
          width: calc(35%);
          max-width: 100%;
          margin: 0;
        }
      }

      &--para {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(65%);
        }

        p {
          ${H2White};
          margin-top: 0;
          margin-bottom: 5rem;
          font-weight: 300;
          text-align: center;

          @media (min-width: 768px) {
            text-align: right;
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(70% - 2rem);
      margin-left: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(65% - 8rem);
      margin-left: 3rem;
      margin-right: 5rem;
    }

    &__large {
      p {
        ${H3White};
      }
    }

    &__small {
      p {
        ${B1White};
      }
    }
  }
`

export default Intro
