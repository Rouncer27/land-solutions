import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B2Black, H3Green, medWrapper } from "../../../styles/helpers"

const ThreeColumns = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.threeColumnsWithImagesTitle}</h2>
        </div>
        <div className="columns">
          {data.threeColumnsWithImagesItems.map((item, index) => {
            const imageDisplay = getImage(
              item.icon.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = item.icon.altText
            return (
              <Item key={index}>
                <div className="image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Item>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .title {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(25% - 5rem);
      margin-right: 5rem;
    }

    h2 {
      ${H3Green};
      font-weight: 300;
    }
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      width: 75%;
    }
  }
`

const Item = styled.div`
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .image {
    padding: 2rem 5rem;
  }

  .content {
    padding: 0 2rem;
  }

  p {
    ${B2Black};
  }
`

export default ThreeColumns
