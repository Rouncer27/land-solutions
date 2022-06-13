import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WeAre = ({ data }) => {
  const image = getImage(
    data?.weAreLandsolutionsImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.weAreLandsolutionsImage?.altText
  return (
    <SectionStyled>
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
                  <h3>{item.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default WeAre
