import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1Black,
  colors,
  H3Blue,
  H3LightGreen,
  medWrapper,
} from "../../../styles/helpers"

const WysiwygIcon = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        {data.wysiwygWithIcon.map((block, index) => {
          const image = getImage(
            block?.icon?.localFile?.childImageSharp?.gatsbyImageData
          )
          const logoAlt = block?.icon?.altText
          return (
            <BlockDiv key={index}>
              <div className="icon">
                <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
              </div>
              <div className="content">
                <h2>{block.mainTitle}</h2>
                <h3>{block.subTitle}</h3>
                <div
                  className="content__wysiwyg"
                  dangerouslySetInnerHTML={{ __html: block.wysiwyg }}
                />
              </div>
            </BlockDiv>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const BlockDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 2rem;
  box-shadow: 4px 8px 4px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }

  .icon {
    @media (min-width: 768px) {
      width: calc(15% - 2rem);
      margin-right: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(15% - 2rem);
      margin-right: 2rem;
    }
  }

  .content {
    @media (min-width: 768px) {
      width: calc(85%);
    }

    @media (min-width: 1025px) {
      width: calc(85%);
    }

    h2 {
      ${H3LightGreen};
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    h3 {
      ${H3Blue};
      margin-top: 0;
    }

    &__wysiwyg {
      p {
        ${B1Black};
        color: #3a3d40;
      }

      a {
        ${B1Black};
        margin: 0;
        text-decoration: underline;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }

      p.s1 {
      }
    }
  }
`

export default WysiwygIcon
