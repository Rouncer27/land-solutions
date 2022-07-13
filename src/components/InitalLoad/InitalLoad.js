import React, { useEffect, useCallback, useContext } from "react"
import styled from "styled-components"

import turbineVideo from "../../assets/turbines.mp4"
import imageTwo from "../../images/background-sample-two.jpg"
import logo from "../../images/land-solutions.png"
import mainL from "../../images/letters/main-l.png"
import arrowRight from "../../images/arrow-right.png"

import { LoadingContext } from "../../context/LoadingContext"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Btn1One,
  H1Blue,
  H2Blue,
  fontSizer,
  H1White,
  H2White,
  B1LightGreen,
  colors,
} from "../../styles/helpers"
gsap.registerPlugin(ScrollTrigger)

const InitalLoad = () => {
  const [loadingState, loadingDispatch] = useContext(LoadingContext)
  const tl = gsap.timeline()

  useEffect(() => {
    const titles = document.querySelector(".titles")
    const titleH1 = document.querySelector(".title h1")
    const subTitle = document.querySelector(".sub-title")
    const subTitles = subTitle.querySelectorAll("p span")
    const container = document.querySelector(".container")
    const letterL = document.querySelector(".bg-letter-l")
    const backgroundOne = document.querySelector(".background-image-one")
    const backgroundContent = document.querySelector(".bg-content")

    const logoSection = document.querySelector(".logo")
    const logo = document.querySelector(".logo__wrapper")
    const logoTitle = document.querySelector(".logo__title")
    const logoButton = document.querySelector(".logo__button")
    const lineGraphic = document.querySelector(".line-graphic")

    // Start by animating the title into view. //
    tl.fromTo(titles, { autoAlpha: 0 }, { autoAlpha: 1, x: "-40%" })
      .add("first")
      // Morph L into full screen video. //
      .to(
        container,
        {
          clipPath: "polygon(100% 0, 100% 76%, 100% 100%, 0 100%, 0 0, 20% 0)",
        },
        "first"
      )
      // Change main title colour to white.
      .to(titleH1, { color: "#fff" }, "first+=0.75")
      // Move main title over to make room for sub-titles.
      .to(titles, { x: "-75%" }, "first+=1.5")
      // Stagger in the sub-titles into view. //
      .fromTo(
        subTitles,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: {
            each: 0.5,
          },
        }
      )
      // Move in the letter L //
      .fromTo(
        letterL,
        { autoAlpha: 0, x: 500 },
        {
          autoAlpha: 1,
          x: 0,
        }
      )

      // Step Two in the animation. //
      .add("second")
      .to(
        container,
        {
          clipPath: "polygon(100% 0, 100% 75%, 100% 100%, 100% 0, 0 0, 20% 0)",
          duration: 0.5,
        },
        "second+=1"
      )
      .fromTo(
        backgroundOne,
        { autoAlpha: 0, duration: 1.5 },
        {
          duration: 1.5,
          autoAlpha: 1,
          width: "100%",
          height: "100%",
        },
        "second+=1.5"
      )
      // Remove the letter L. //
      .to(letterL, { autoAlpha: 0, x: 500 }, "second+=1.5")
      // Move titles up after new background comess in. //
      .to(
        titles,
        { y: "-50%", duration: 1.5, ease: "power2.out" },
        "second+=1.85"
      )
      // Bring in new content. //
      .fromTo(
        backgroundContent,
        { autoAlpha: 0, x: -300 },
        { autoAlpha: 1, x: 0 },
        "second+=2.25"
      )

      // Close the l back over the background image. //
      .add("third")
      .to(
        backgroundOne,
        {
          clipPath: "polygon(20% 80%, 55% 80%, 55% 100%, 0 100%, 0 0, 20% 0)",
          duration: 1,
        },
        "third+=1.0"
      )
      // get rid of the main content
      .to(titles, { autoAlpha: 0, y: -500 })
      .to(backgroundContent, { autoAlpha: 0, x: -750 }, "third+=1.3")

      // Bring in the logo section
      .fromTo(
        logoSection,
        { autoAlpha: 0, zIndex: -1 },
        { autoAlpha: 1, zIndex: 100 },
        "third+=2.5"
      )
      // Load in the three elements. //
      .fromTo(logo, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(logoTitle, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(logoButton, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(
        lineGraphic,
        { transformOrigin: "center left", scaleX: 0, duration: 4 },
        { scaleX: 1, autoAlpha: 1, duration: 4 }
      )
  }, [])

  return (
    <StyledDiv>
      <div id="step-one">
        <div className="container">
          <div className="video">
            <video
              className="bg-video"
              src={turbineVideo}
              autoplay="autoplay"
              playsInline
              muted
              loop
              preload
              controls={false}
            ></video>
          </div>
        </div>
        <div className="titles">
          <div className="title">
            <h1>We Are Land.</h1>
          </div>
          <div className="sub-title">
            <p>
              <span>Energy.</span>
            </p>
            <p>
              <span>Technology.</span>
            </p>
            <p>
              <span>People.</span>
            </p>
          </div>
        </div>
        <div className="bg-letter-l" />
      </div>

      <div className="navigation">
        <button
          onClick={() => {
            loadingDispatch({
              type: "INIT_LOAD_DONE",
            })
          }}
          type="button"
        >
          <span>SKIP</span>
          <span>
            <img src={arrowRight} alt="" />
          </span>
        </button>
      </div>

      <div id="step-two">
        <div className="background-image-one">
          <div className="image" />
          <div className="bg-content">
            <div className="bg-content__inner">
              <p>Connecting land, people, and technology</p>
            </div>
          </div>
        </div>
      </div>

      <div id="step-three">
        <div className="logo">
          <div className="logo__wrapper">
            <img src={logo} alt="Land Solutions" />
          </div>
          <div className="logo__title">
            <p>
              This is your vision <span className="line-graphic" />
            </p>
          </div>
          <div className="logo__button">
            <button
              onClick={() => {
                loadingDispatch({
                  type: "INIT_LOAD_DONE",
                })
              }}
              type="button"
            >
              Let Us help get you there
            </button>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .bg-letter-l {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${mainL});
    background-position: center left;
    background-repeat: no-repeat;
    background-size: auto 100%;
    z-index: 100;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    clip-path: polygon(20% 80%, 55% 80%, 55% 100%, 0 100%, 0 0, 20% 0);
    transition: clip-path 1s;
    width: 100%;
    z-index: 4;
    overflow: hidden;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;

    .bg-video {
      position: absolute;
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }

  .titles {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    left: 100%;
    width: 100%;
    transform: translateY(-50%);
    z-index: 155;
  }

  .title {
    max-width: 35rem;
    margin-right: 6.7rem;

    h1 {
      ${H1Blue};
      ${fontSizer(7.5, 13.5, 76.8, 150, 5)};
      font-weight: bold;
      text-align: right;
      text-transform: uppercase;
    }
  }

  .sub-title {
    max-width: 35rem;

    p {
      ${H1White};
      margin: 0;
      transform-origin: center bottom;
      font-weight: 300;
      text-align: left;
      overflow: hidden;
      line-height: 1.25;

      span {
        display: block;
      }
    }
  }

  .navigation {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    z-index: 1000;

    button {
      ${B1LightGreen};
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: transparent;
      border: none;

      span {
        max-width: 10rem;
        padding-right: 2.5rem;
      }
    }
  }

  .background-image-one {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    height: 25%;
    clip-path: polygon(100% 0, 100% 76%, 100% 100%, 0 100%, 0 0, 20% 0);
    z-index: 100;

    .image {
      background-image: url(${imageTwo});
      background-size: cover;
      width: 100%;
      height: 100%;
    }

    .bg-content {
      position: absolute;
      bottom: 7.5rem;
      left: 0;
      width: 90%;
      overflow: hidden;

      &__inner {
        position: relative;
        padding: 5rem 2rem 5rem 8.7rem;
        background: linear-gradient(
          225deg,
          rgba(9, 9, 121, 0) 18%,
          rgba(31, 82, 127, 1) 18%
        );
      }
      p {
        ${H2White};
        margin: 0;
        font-weight: 300;
      }
    }
  }

  .logo {
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 9999;

    &__wrapper {
      width: 37.5rem;
      margin: 2rem auto;
      padding: 0 2.5rem;
    }

    &__title {
      width: 37.5rem;
      margin: 2rem auto;
      text-align: center;

      p {
        ${H2Blue};
        position: relative;

        .line-graphic {
          position: absolute;
          top: 50%;
          left: 90%;
          width: 100rem;
          height: 1rem;
          background-color: ${colors.colorTertiary};
        }
      }
    }

    &__button {
      width: 37.5rem;
      margin: 2rem auto;
      text-align: center;

      button {
        ${Btn1One};
      }
    }
  }
`

export default InitalLoad
