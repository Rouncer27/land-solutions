import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, H3LightGreen, standardWrapper } from "../../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"
import waves from "../../../images/long-wave.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const NavLinksIcon = ({ data }) => {
  const imageDisplay = getImage(
    data.navigationLinksWithIconIcon.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.navigationLinksWithIconIcon.altText

  useEffect(() => {
    const tigger = document.querySelector("#wave-trigger")
    const waves = document.querySelector(".wave-bg")

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
    <StyledDiv id="wave-trigger">
      <div className="wrapper">
        <div className="wrapper__inner">
          <div className="icon">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <ul className="links">
            {data.navigationLinksWithIconLinks.map((item, index) => (
              <li key={index}>
                <button type="button" onClick={() => scrollTo(`#${item.slug}`)}>
                  {item.text} <span>&#8594;</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wave-bg" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;

  .wave-bg {
    position: absolute;
    top: -20rem;
    right: 0%;
    width: 200%;
    height: 30rem;
    background-image: url(${waves});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    z-index: 1;
  }

  .wrapper {
    ${standardWrapper};
    position: relative;
    z-index: 1000;

    &__inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 45rem;
      margin: 2rem auto;
    }
  }

  .icon {
    width: calc(25% - 2.5rem);
    margin-right: auto;
    margin-left: 0;

    @media (min-width: 500px) {
      margin-left: auto;
      margin-right: 2.5rem;
    }
  }

  .links {
    width: 100%;

    @media (min-width: 500px) {
      width: 75%;
    }

    button {
      ${H3LightGreen};
      transition: all 0.3s ease-out;
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-weight: 300;

      &:hover {
        color: ${colors.colorAccent};
      }
    }
  }
`

export default NavLinksIcon
