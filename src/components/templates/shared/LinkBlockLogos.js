import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  B1White,
  Btn1Three,
  H2White,
  H3Blue,
  medWrapper,
} from "../../../styles/helpers"

const LinkBlockLogos = ({ data }) => {
  const imageDisplay = getImage(
    data.linkBlockWithLogosImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.linkBlockWithLogosImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="block">
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
              <h2>{data.linkBlockWithLogosTitle}</h2>
              <div
                className="content__inner--para"
                dangerouslySetInnerHTML={{
                  __html: data.linkBlockWithLogosContent,
                }}
              />
              <div className="content__link">
                <Link to={`/${data.linkBlockWithLogosButtonSlug}`}>
                  {data.linkBlockWithLogosButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="logos">
          <h2>{data.linkBlockWithLogosLogosTitle}</h2>
          {data.linkBlockWithLogosLogos.map((logo, index) => {
            const logoDisplay = getImage(
              logo.logo.localFile.childImageSharp.gatsbyImageData
            )
            const logoAlt = logo.logo.altText

            const logoJsx = logo.url ? (
              <a target="_blank" rel="noreferrer" href={`${logo.url}`}>
                <GatsbyImage
                  image={logoDisplay}
                  alt={logoAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </a>
            ) : (
              <GatsbyImage
                image={logoDisplay}
                alt={logoAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            )

            return (
              <div className="logo" key={index}>
                {logoJsx}
              </div>
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
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin: 2rem 0.5rem;
    }

    h2 {
      ${H3Blue};
      width: 100%;
      text-align: center;
    }

    .logo {
      max-width: 33.9rem;
      margin: 2rem auto;
    }
  }

  .block {
    position: relative;
    width: 100%;
    margin: 2rem auto;

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin: 2rem 0.5rem;
    }

    .content {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(31, 82, 127, 0.8);

      @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 85%;
        height: 100%;
        padding-left: 20%;
        background: linear-gradient(
          255deg,
          rgba(31, 82, 127, 1) 81%,
          rgba(0, 0, 0, 0) 81%
        );
      }

      @media (min-width: 1025px) {
        width: 75%;
      }

      &__inner {
        padding: 2rem;

        @media (min-width: 768px) {
          padding: 0;
          padding-top: 2rem;
          padding-right: 2rem;
        }

        @media (min-width: 1025px) {
          padding: 0;
          padding-top: 8.5rem;
          padding-right: 2rem;
        }

        &--para {
          padding-right: 2rem;
        }
      }

      &__link {
        position: absolute;
        bottom: 2rem;
        left: 2rem;

        @media (min-width: 768px) {
          right: 4rem;
          left: auto;
        }

        a {
          ${Btn1Three};
        }
      }

      h2 {
        ${H2White};
        font-weight: 300;
      }

      p {
        ${B1White};
      }
    }
  }
`

export default LinkBlockLogos
