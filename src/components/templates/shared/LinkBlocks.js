import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1White,
  Btn1Three,
  H2White,
  medWrapper,
} from "../../../styles/helpers"

const LinkBlocks = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        {data.linkBlocks.map((block, index) => {
          const imageDisplay = getImage(
            block.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = block.image.altText
          return (
            <Block key={index}>
              <div className="icon">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="content">
                <div className="content__inner">
                  <h2>{block.title}</h2>
                  <div
                    className="content__inner--para"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                  <div className="content__link">
                    <Link to={`/${block.butonSlug}`}>{block.buttonText}</Link>
                  </div>
                </div>
              </div>
            </Block>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper}
  }
`

const Block = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  background: rgba(31, 82, 127, 1);

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
    margin: 2rem 0.5rem;
  }

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    padding-bottom: 5rem;
    background: rgba(31, 82, 127, 1);

    @media (min-width: 768px) {
      padding-bottom: 7.5rem;
    }

    @media (min-width: 1025px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 90%;
      height: 100%;
      width: 75%;
      padding-left: 20%;
      padding-bottom: 0;
      background: linear-gradient(
        255deg,
        rgba(31, 82, 127, 1) 81%,
        rgba(0, 0, 0, 0) 81%
      );
    }

    &__inner {
      width: 100%;
      padding: 2rem;
      padding-top: 2rem;

      @media (min-width: 768px) {
        padding: 0;
        padding-top: 2rem;
      }

      @media (min-width: 1025px) {
        padding-top: 5rem;
      }

      &--para {
        padding-right: 2rem;
      }
    }

    &__link {
      position: absolute;
      bottom: 2rem;
      right: auto;
      left: 4rem;

      @media (min-width: 768px) {
        right: auto;
        left: 2rem;
      }

      @media (min-width: 1025px) {
        right: 4rem;
        left: auto;
      }

      a {
        ${Btn1Three};
        text-transform: uppercase;
      }
    }

    h2 {
      ${H2White};
      font-weight: 300;
      margin-top: 0;
    }

    p {
      ${B1White};
    }
  }
`

export default LinkBlocks
