import React, { useEffect } from "react"
import styled from "styled-components"

import icon from "../../../images/icon.png"
import waves from "../../../images/long-wave.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const IconGraphic = () => {
  useEffect(() => {
    const tigger = document.querySelector("#icon-graphic-trigger")
    const waves = document.querySelector(".wave-bg")
    const icon = document.querySelector(".icon-graphic")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: tigger,
          markers: false,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      })
      .to(icon, {
        rotation: 360,
        ease: "power3.out",
        duration: 2,
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: tigger,
          markers: false,
          start: "top 87.5%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          scrub: 5,
        },
      })
      .to(waves, {
        x: 200,
        ease: "none",
      })
  }, [])
  return (
    <StyledDiv id="icon-graphic-trigger">
      <div className="icon-graphic">
        <img src={icon} alt="" />
      </div>
      <div className="wave-bg" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;

  .icon-graphic {
    position: relative;
    width: 100%;
    max-width: 31.5rem;
    margin: 0rem auto 2rem;
    z-index: 100;
  }

  .wave-bg {
    position: absolute;
    top: -10rem;
    right: -45%;
    width: 200%;
    height: 30rem;
    background-image: url(${waves});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }
`

export default IconGraphic
