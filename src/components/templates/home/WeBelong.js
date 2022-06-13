import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
              <div key={index}>
                <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
              </div>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default WeBelong
