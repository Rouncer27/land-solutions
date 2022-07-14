import React, { useEffect } from "react"
import styled from "styled-components"

import bgImg from "../../../images/header-triangles.png"
import { colors, H2White } from "../../../styles/helpers"

import Lines from "./Lines"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(DrawSVGPlugin)

const Connections = () => {
  useEffect(() => {
    const titles = document.querySelectorAll(".lines-title")
    const allLine = document.querySelectorAll(".line")
    const lineOne = document.querySelector(".line-one")
    const lineTwo = document.querySelector(".line-two")
    const lineThree = document.querySelector(".line-three")
    const lineFour = document.querySelector(".line-four")
    const lineFive = document.querySelector(".line-five")
    const lineSix = document.querySelector(".line-six")
    const lineSeven = document.querySelector(".line-seven")
    const lineEight = document.querySelector(".line-eight")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#lines-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      })
      .fromTo(
        titles,
        { y: 200, autoAlpha: 0 },
        { duration: 1.25, y: 0, autoAlpha: 1 },
        "start"
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#lines-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      })
      .add("start")
      .fromTo(
        lineOne,
        { drawSVG: 0 },
        { duration: 6, drawSVG: "100%" },
        "start"
      )
      .fromTo(
        lineTwo,
        { drawSVG: 0 },
        { duration: 3, drawSVG: "100%" },
        "start+=1"
      )
      .fromTo(
        lineThree,
        { drawSVG: 0 },
        { duration: 5, drawSVG: "100%" },
        "start+=1.5"
      )
      .fromTo(
        lineFour,
        { drawSVG: 0 },
        { duration: 2, drawSVG: "100%" },
        "start+=2"
      )
      .fromTo(
        lineFive,
        { drawSVG: 0 },
        { duration: 3, drawSVG: "100%" },
        "start+=2.5"
      )
      .fromTo(
        lineSix,
        { drawSVG: 0 },
        { duration: 4, drawSVG: "100%" },
        "start+=3"
      )
      .fromTo(
        lineSeven,
        { drawSVG: 0 },
        { duration: 5, drawSVG: "100%" },
        "start+=3.5"
      )
      .fromTo(
        lineEight,
        { drawSVG: 0 },
        { duration: 4, drawSVG: "100%" },
        "start+=4"
      )
  }, [])

  return (
    <StyledDiv id="lines-trigger">
      <div className="lines-title">
        <h2>What sector are you interested in?</h2>
      </div>
      <div className="background-lines">
        <Lines />
      </div>
      <div className="background-image" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  background-color: ${colors.colorPrimary};
  overflow: hidden;
  height: 60vw;

  .lines-title {
    position: relative;
    top: 11.5rem;
    width: 100%;
    padding: 0 5rem;
    text-align: center;
    z-index: 100;

    h2 {
      ${H2White};
      text-shadow: 2px 4px 7px rgba(0, 0, 0, 0.32);
      text-transform: uppercase;
    }
  }

  .background-lines {
    position: absolute;
    bottom: -110px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;

    ${
      "" /* .line-one {
      stroke-dasharray: 4 8;
      stroke-width: 3;
      fill: none;
    } */
    }
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-size: 100% 100%;
    z-index: 5;
  }
`

export default Connections
