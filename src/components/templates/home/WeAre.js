import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1Black,
  B2OffBlack,
  colors,
  H2Blue,
  H2Green,
} from "../../../styles/helpers"

import bgimage from "../../../images/background-image-para.jpg"
import letter from "../../../images/letter-reversed.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const WeAre = ({ data }) => {
  useEffect(() => {
    const tigger = document.querySelector("#letter-background-trigger")
    const img = document.querySelector(".image__background")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: tigger,
          markers: false,
          start: "top 95%",
          end: "bottom 0%",
          scrub: true,
          invalidateOnRefresh: true, // to make it responsive
        },
      })
      .fromTo(
        img,
        {
          y: 75,
          ease: "none",
        },
        { y: -75, ease: "none" }
      )
  }, [])

  return (
    <SectionStyled id="letter-background-trigger">
      <div className="wrapper">
        <div className="titles">
          <h2>{data.weAreLandsolutionsTitle}</h2>
          <p>{data.weAreLandsolutionsSubTitle}</p>
        </div>
        <div className="content">
          <div
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: data.weAreLandsolutionsContent }}
          />
          <div>
            {data.weAreLandsolutionsItems.map((item, index) => {
              return (
                <div key={index}>
                  <h3>
                    <span>&#8594;</span>
                    {item.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="image">
        <div className="image__letter" />
        <div className="image__background" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  overflow: hidden;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .titles {
    position: relative;
    width: 80%;
    padding: 2rem;
    margin-left: auto;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 30rem;
      margin-left: auto;
      padding: 0;
    }

    @media (min-width: 1025px) {
      width: calc(50%);
      max-width: 40rem;
    }

    @media (min-width: 1500px) {
      min-height: 85rem;
    }

    @media (min-width: 1800px) {
      min-height: 95rem;
    }

    h2 {
      ${H2Blue};
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        margin-bottom: 8.1rem;
      }
    }

    p {
      ${H2Green};
      font-weight: 300;
    }
  }

  .content {
    width: 100%;
    margin-top: 8rem;
    padding: 0 4rem;

    @media (min-width: 600px) {
      margin-top: 10rem;
    }

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-top: 0;
      margin-left: 2rem;
      padding: 0 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 10rem);
      margin-left: 10rem;
    }

    h3 {
      ${B2OffBlack};
      position: relative;
      color: ${colors.colorSecondary};
      font-weight: bold;

      span {
        display: block;
        position: absolute;
        top: 0;
        left: -4rem;
        font-weight: 300;
        font-size: 3rem;
        line-height: 0.7;
      }
    }

    p {
      ${B1Black};
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    z-index: -1;

    @media (min-width: 768px) {
      width: 50%;
      height: 100%;
    }

    @media (min-width: 850px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 100%;
    }

    &__letter {
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      background-image: url(${letter});
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 5;

      @media (min-width: 1500px) {
        background-size: 100% auto;
        background-position: 50% 50%;
      }
    }

    &__background {
      position: absolute;
      top: 10%;
      bottom: 10%;
      left: -10%;
      width: 120%;
      background-image: url(${bgimage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 1;

      @media (min-width: 1025px) {
        top: -10%;
        bottom: -10%;
      }
    }
  }
`

export default WeAre
