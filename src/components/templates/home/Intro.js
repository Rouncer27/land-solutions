import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Intro = ({ data }) => {
  const image = getImage(
    data?.homeIntroImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.homeIntroImage?.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h1>{data.homeIntroTitle}</h1>
          </div>
          <div
            className="content__paragraphs"
            dangerouslySetInnerHTML={{ __html: data.homeIntroContent }}
          />
          <div className="content__link">
            <Link to={`/${data.homeIntroButtonSlug}`}>
              {data.homeIntroButtonText}
            </Link>
          </div>
        </div>

        <div className="image">
          <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default Intro
