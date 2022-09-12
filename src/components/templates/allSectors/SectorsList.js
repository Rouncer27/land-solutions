import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Green,
  B1White,
  colors,
  H2Green,
  H3White,
  standardWrapper,
} from "../../../styles/helpers"

import arrowRight from "../../../images/arrow-right.png"

const SectorsList = ({ data, sectors }) => {
  return (
    <StyledSection>
      <div className="sectors-title">
        <p>Click on your sector to learn more</p>
      </div>
      <ul className="wrapper">
        {sectors.map(sector => {
          const imageDisplay = getImage(
            sector.node.sectors.navigationIcon.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = sector.node.sectors.navigationIcon.altText
          return (
            <li key={sector.node.id}>
              <Link to={`/sectors/${sector.node.slug}`}>
                <span className="icon">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </span>
                <span className="title">{sector.node.title}</span>
                <span className="arrow">
                  <img src={arrowRight} alt="" />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${colors.colorSecondary};

  @media (min-width: 1025px) {
    margin-top: -4rem;
    padding-top: 0;
    padding-bottom: 10rem;
  }

  .sectors-title {
    ${standardWrapper};
    position: relative;
    max-width: 85rem !important;
    margin: auto;
    padding: 0 2rem;
    z-index: 100;

    p {
      ${H3White};
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }

  .wrapper {
    ${standardWrapper};
    max-width: 85rem !important;

    li {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background-color: #f3f5ef;
      box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.42);
      transition: all 0.3s ease-out;

      a {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 3rem 4rem;
        transition: all 0.3s ease-out;

        span {
          transition: all 0.3s ease-out;
        }

        .icon {
          width: 20%;
          padding: 1rem;

          @media (min-width: 768px) {
            width: 15%;
          }
        }

        .title {
          ${B1Green};
          width: 70%;
          font-weight: bold;

          @media (min-width: 768px) {
            ${H2Green};
            width: 75%;
            font-weight: 300;
          }
        }

        .arrow {
          position: absolute;
          top: 50%;
          right: 2rem;
          width: 4rem;
          transform: translateY(300%);
          opacity: 0;

          @media (min-width: 768px) {
            width: 7rem;
            right: 5rem;
          }
        }
      }

      &:hover {
        background-color: #fff;

        a {
          .title {
          }

          .arrow {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      }
    }
  }
`

export default SectorsList
