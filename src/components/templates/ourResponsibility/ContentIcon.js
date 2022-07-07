import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  Btn1One,
  Btn1Two,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

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
          {data.contentIconButtonOneRequired ? (
            <button
              className="btn-one"
              onClick={() => scrollTo(`#${data.contentIconButtonOneId}`)}
            >
              {data.contentIconButtonOneText}
            </button>
          ) : null}
          {data.contentIconButtonOneRequired &&
          data.contentIconButtonTwoRequired ? (
            <button
              className="btn-two"
              onClick={() => scrollTo(`#${data.contentIconButtonTwoId}`)}
            >
              {data.contentIconButtonTwoText}
            </button>
          ) : null}
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

    .btn-one {
      ${Btn1Two};
    }

    .btn-two {
      ${Btn1One};
    }
  }
`

export default ContentIcon
