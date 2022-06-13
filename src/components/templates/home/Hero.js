import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = ({ data }) => {
  const image = getImage(
    data?.homeHeroImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.homeHeroImage?.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content-left">
          <div className="content-left__title">
            <h2>{data.homeHeroTitle}</h2>
          </div>
          <div
            className="content-left__content"
            dangerouslySetInnerHTML={{ __html: data.homeHeroParagraph }}
          />
        </div>
        <div className="content-right">
          <div
            className="content-right__wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.homeHeroContent }}
          />
        </div>
      </div>
      <div className="hero-image">
        <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default Hero
