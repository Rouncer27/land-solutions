import React, { useEffect } from "react"
import styled from "styled-components"
import { H1White } from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(ScrollTrigger)

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const TextScrambled = ({ text, index }) => {
  useEffect(() => {
    let num = getRandomArbitrary(1, 750)
    const random_boolean = Math.random() < 0.5

    if (random_boolean) {
      num = num * -1
    }

    // const tl = gsap.timeline({
    //   defaults: { delay: index, duration: 2, ease: "none" },
    // })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#scramble-${index}`,
          markers: false,
          start: "top 45%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      })
      .fromTo(
        `#scramble-${index}`,
        { x: num, autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: "power2.out",
          duration: 1.5,
          x: 0,
          scrambleText: {
            text: text,
            chars: "lowerCase",
            revealDelay: 0.5,
            tweenLength: false,
          },
        }
      )
  }, [])
  return (
    <StyledDiv position={index} className="text-item">
      <p id={`scramble-${index}`}>{text}</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    left: ${props =>
      props.position === 0
        ? "25%"
        : props.position === 1
        ? "55%"
        : props.position === 2
        ? "10%"
        : props.position === 3
        ? "60%"
        : props.position === 4
        ? "35%"
        : props.position === 5
        ? "20%"
        : props.position === 6
        ? "47.5%"
        : props.position === 6
        ? "37.5%"
        : "150px"};
  }

  p {
    ${H1White};
    margin: 0;
    padding: 0;
    font-weight: 300;
    text-transform: uppercase;
  }
`

export default TextScrambled
