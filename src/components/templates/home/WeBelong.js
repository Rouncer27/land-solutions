import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H3Blue, medWrapper } from "../../../styles/helpers"

const WeBelong = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Organizations We Belong To</h2>
        </div>
        <div className="logos">
          {data.belongLogos.map((logo, index) => {
            const image = getImage(
              logo?.logo?.localFile?.childImageSharp?.gatsbyImageData
            )
            const logoAlt = logo?.logo?.altText
            return (
              <div className="logo" key={index}>
                <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
              </div>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper};
  }

  &::after {
    position: absolute;
    top: 5rem;
    left: 0%;
    height: 1rem;
    transform: translateY(-40%);
    background-color: #9db594;
    content: "";
  }

  @media (min-width: 768px) {
    &::after {
      width: 30%;
    }
  }

  @media (min-width: 1025px) {
    &::after {
      width: 37.5%;
    }
  }

  .title {
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;

    h2 {
      ${H3Blue};
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: center;
    }

    .logo {
      width: calc(100% / 2);
      padding: 3rem;

      @media (min-width: 768px) {
        width: calc((100% / 4) - 3rem);
        padding: 1.5rem;
        margin: 1.5rem;
      }

      @media (min-width: 1025px) {
        width: calc((100% / 8) - 3rem);
        margin: 1.5rem;
        padding: 0;
      }
    }
  }
`

export default WeBelong
