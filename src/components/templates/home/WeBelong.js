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
  .wrapper {
    ${medWrapper};
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
    justify-content: center;
    align-items: center;
    width: 100%;

    .logo {
      width: calc(100% / 2);

      @media (min-width: 768px) {
        width: calc(100% / 4);
      }

      @media (min-width: 1025px) {
        width: calc((100% / 8) - 3rem);
        margin: 1.5rem;
      }
    }
  }
`

export default WeBelong
