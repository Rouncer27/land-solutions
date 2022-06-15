import React from "react"
import styled from "styled-components"
import KUTE from "kute.js"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import tele from "../../../images/telecommunications.jpg"
gsap.registerPlugin(ScrollTrigger)

const Letters = () => {
  const handleUpdateLetterU = () => {
    KUTE.to(`#display`, { path: `#u` }).start()
  }

  const handleUpdateLetterT = () => {
    KUTE.to(`#display`, { path: `#t` }).start()
  }

  const handleUpdateLetterM = () => {
    KUTE.to(`#display`, { path: `#m` }).start()
  }

  const handleUpdateLetterR = () => {
    KUTE.to(`#display`, { path: `#r` }).start()
  }

  const handleUpdateLetterP = () => {
    KUTE.to(`#display`, { path: `#p` }).start()
  }

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipping">
            <path
              fill="#000"
              id="display"
              d="M590 5.85v484.9c0 166.14-52.26 223.71-148.69 223.71-95.08 0-144.68-57.57-144.68-223.71V5.85H89V468c0 294.73 120.56 426 352.3 426s348.32-131.29 348.32-426V5.85z"
            ></path>
          </clipPath>
        </defs>

        <path
          id="t"
          fill="#000"
          style={{ visibility: "hidden" }}
          d="M90.14 5.95L90.14 183.29 331.6 183.29 331.6 894 543.03 894 543.03 183.29 784.49 183.29 784.49 5.95 90.14 5.95z"
        ></path>

        <path
          id="u"
          style={{ visibility: "hidden" }}
          d="M590 5.85v484.9c0 166.14-52.26 223.71-148.69 223.71-95.08 0-144.68-57.57-144.68-223.71V5.85H89V468c0 294.73 120.56 426 352.3 426s348.32-131.29 348.32-426V5.85z"
        ></path>
        <path
          id="m"
          style={{ visibility: "hidden" }}
          d="M627.64 6L492.75 391.61c-17.75 51.77-31.34 104.91-47.69 160.77h-5.45c-16.34-55.86-31.33-109-47.68-160.77L251.59 6H20v887h190.72V585.08c0-87.2-17.71-238.44-28.61-325.63h5.44l70.85 231.62 118.54 327h119.9l119.9-327 73.57-231.62h5.45c-10.9 87.19-28.61 238.43-28.61 325.63V893h192.11V6z"
        ></path>
        <path
          id="r"
          style={{ visibility: "hidden" }}
          d="M578.56 541c91.14-43.54 152.36-126.52 152.36-255.75 0-213.55-157.8-278.84-345.53-278.84H60.26V892h212.22V580.48h3.1V413.15h-3.1V173.73h96.58c100.67 0 155.08 27.21 155.08 111.55s-54.41 127.87-155.08 127.87h-93.48v167.33h100.29L539.11 892h236.7z"
        ></path>
        <path
          id="p"
          style={{ visibility: "hidden" }}
          d="M380 6.41H68.5V892h212.22V173.73h87.06c103.39 0 159.16 31.29 159.16 119.72S478 430.84 373.22 430.84h-92.5v167.32h104.74c186.37 0 348.25-92.5 348.25-304.71C733.71 75.79 574.55 6.41 380 6.41z"
        ></path>
      </svg>
      <SectionStyled>
        <div className="letter-wrap" />
      </SectionStyled>
      <div className="testing-button">
        <button
          onClick={() => {
            handleUpdateLetterU()
          }}
        >
          Change To Letter U
        </button>

        <button
          onClick={() => {
            handleUpdateLetterM()
          }}
        >
          Change To Letter M
        </button>
        <button
          onClick={() => {
            handleUpdateLetterR()
          }}
        >
          Change To Letter R
        </button>
        <button
          onClick={() => {
            handleUpdateLetterP()
          }}
        >
          Change To Letter P
        </button>
        <button
          onClick={() => {
            handleUpdateLetterT()
          }}
        >
          Change To Letter T
        </button>
      </div>
    </>
  )
}

const SectionStyled = styled.section`
  width: 100%;
  background-image: url(${tele});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .letter-wrap {
    width: 88rem;
    height: 90rem;
    clip-path: url(#clipping);
    -webkit-clip-path: url(#clipping);
    aspect-ratio: 1/1;
    object-fit: cover;
    margin: auto;
    background-color: #fff;
    opacity: 0.75;
    transform: scale(0.5);
  }

  .testing-button {
    position: absolute;
    z-index: 100000;
    cursor: pointer;
    top: 5rem;
    right: -15rem;
  }
`

export default Letters
