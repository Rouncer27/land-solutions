import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  B1OffBlack,
  H2Blue,
  H3LightGreen,
  standardWrapper,
} from "../../../../styles/helpers"

const SubSectionTwo = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content-top">
          <div className="image">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="content">
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
        <div className="content-bottom">
          <div className="titles">
            <h2>{data.bottomTitle}</h2>
            <Link to={`/${data.bottomTitleLinkSlug}`}>
              {data.bottomTitleLink}
            </Link>
          </div>
          <div
            className="bot-content"
            dangerouslySetInnerHTML={{ __html: data.bottomContent }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }

  @media (min-width: 1025px) {
    margin-top: 6rem;
  }

  .wrapper {
    ${standardWrapper};
  }

  .content-bottom,
  .content-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;
    padding-bottom: 5rem;
    border-bottom: 0.1rem solid #1f527f;
  }

  .content-top {
    .image {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(40% - 2rem);
        margin-right: 2rem;
      }
    }

    .content {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(60% - 2rem);
        margin-left: 2rem;
      }

      h2 {
        ${H2Blue};
        margin: 0;
        margin-bottom: 3.5rem;
      }

      p {
        ${B1Black};
      }
    }
  }

  .content-bottom {
    .titles {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(40% - 2rem);
        margin-right: 2rem;
      }
    }

    .bot-content {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(60% - 2rem);
        margin-left: 2rem;
      }
    }

    h2 {
      ${H2Blue};
      margin: 0;
      margin-bottom: 3.5rem;
    }

    a {
      ${H3LightGreen};
      display: block;
      font-weight: 300;
      text-align: right;
      text-decoration: underline;
    }

    p {
      ${B1OffBlack};
      color: #003346;
    }
  }
`

export default SubSectionTwo
