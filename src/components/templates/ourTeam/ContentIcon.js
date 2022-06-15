import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H3Blue, standardWrapper } from "../../../styles/helpers"

const ContentIcon = ({ data }) => {
  const imageDisplay = getImage(
    data.contentIconImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.contentIconImage.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="icon">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.contentIconContent }} />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 9rem 0;
  .wrapper {
    ${standardWrapper};
  }

  .icon {
    width: 100%;
    max-width: 20rem;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(20% - 2rem);
      margin-right: 2rem;
      margin-bottom: 0;
    }

    @media (min-width: 1025px) {
      width: calc(15% - 2rem);
      margin-right: 2rem;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(80% - 2rem);
      margin-left: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(85% - 2rem);
      margin-left: 2rem;
    }

    p {
      ${H3Blue};
    }
  }
`

export default ContentIcon
