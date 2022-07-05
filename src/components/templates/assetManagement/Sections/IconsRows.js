import React from "react"
import styled from "styled-components"
import { B2OffBlack, standardWrapper } from "../../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IconsRows = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.iconsRows.map((icon, index) => {
          const sideImgDisplay = getImage(
            icon.icon.localFile.childImageSharp.gatsbyImageData
          )
          const sideImgAlt = icon.icon.altText
          return (
            <IconRow key={index}>
              <div className="icon">
                <GatsbyImage
                  image={sideImgDisplay}
                  alt={sideImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="content">
                <h2>{icon.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: icon.content }} />
              </div>
            </IconRow>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

const IconRow = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
    margin-bottom: 0;
  }

  .icon {
    width: 7.5rem;
  }

  .content {
    width: 100%;
    margin-top: 3.5rem;
    padding: 0.75rem;

    h2 {
      ${B2OffBlack};
      font-weight: bold;
      margin: 0;
    }

    p {
      ${B2OffBlack};
      margin: 0;
    }
  }
`

export default IconsRows
