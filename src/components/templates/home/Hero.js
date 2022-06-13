import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1White, H2Green, H2White } from "../../../styles/helpers"
import { Link } from "gatsby"

const Hero = ({ data }) => {
  const image = getImage(
    data?.homeHeroImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.homeHeroImage?.altText
  return (
    <>
      <SectionStyled>
        <div className="wrapper">
          <div className="content-left">
            <div className="content-left__title">
              <h2>{data.homeHeroTitle}</h2>
            </div>
            <div
              className="content-left__content"
              dangerouslySetInnerHTML={{ __html: data.homeHeroParagraph }}
            />
          </div>
          <div className="content-right">
            <div
              className="content-right__wysiwyg"
              dangerouslySetInnerHTML={{ __html: data.homeHeroContent }}
            />
          </div>
        </div>
        <div className="hero-image">
          <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
        </div>
      </SectionStyled>
      <LearnLink>
        <Link to="/about">
          Learn why we’re one of North America’s
          <br /> leading land companies.
        </Link>
      </LearnLink>
    </>
  )
}

const SectionStyled = styled.section`
  position: relative;
  overflow: hidden;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    z-index: 100;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100%);
      height: 100%;

      img {
        width: 100% !important;
      }
    }
  }

  .content-left {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
      background: linear-gradient(
        255deg,
        rgba(0, 0, 0, 0) 12%,
        rgba(31, 82, 127, 0.9) 12%
      );
    }

    @media (min-width: 1025px) {
      padding: 6rem;
    }

    &__title {
      width: 100%;

      h2 {
        ${H2White};
      }
    }

    &__content {
      p {
        ${B1White};

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }

  .content-right {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
      background: linear-gradient(
        255deg,
        rgba(31, 82, 127, 0.9) 81%,
        rgba(0, 0, 0, 0) 81%
      );
    }

    @media (min-width: 1025px) {
      padding: 9rem 6rem;
      padding-left: 15rem;
    }

    p,
    li {
      ${B1White};

      &:last-of-type {
        margin: 0;
      }
    }

    ul {
      margin-bottom: 2.5rem;
    }

    li {
      margin-bottom: 0.75rem;
    }
  }
`

const LearnLink = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 4rem 2rem;
  margin: auto;

  a {
    ${H2Green};
    font-weight: 300;
  }
`

export default Hero
