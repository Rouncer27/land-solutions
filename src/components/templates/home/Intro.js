import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Btn1One, colors, H1Blue, H3Blue } from "../../../styles/helpers"

const Intro = ({ data }) => {
  const image = getImage(
    data?.homeIntroImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.homeIntroImage?.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h1>{data.homeIntroTitle}</h1>
          </div>
          <div
            className="content__paragraphs"
            dangerouslySetInnerHTML={{ __html: data.homeIntroContent }}
          />
          <div className="content__link">
            <Link to={`/${data.homeIntroButtonSlug}`}>
              {data.homeIntroButtonText}
            </Link>
          </div>
        </div>

        <div className="image">
          <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
          <div className="image__l" />
        </div>
      </div>
      <div className="graphic" />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    padding-bottom: 7.5rem;
  }

  @media (min-width: 1025px) {
    padding-bottom: 10rem;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .content {
    width: 100%;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(50%);
      margin-bottom: 0;
    }

    @media (min-width: 1025px) {
      width: calc(50%);
      max-width: 45rem;
      padding-right: 2.5rem;
      margin-left: auto;
    }

    h1 {
      ${H1Blue};
      text-transform: uppercase;
    }

    &__paragraphs {
      p {
        ${H3Blue};
      }
    }

    &__link {
      a {
        ${Btn1One};
        text-transform: uppercase;
      }
    }
  }

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(50%);
    }

    &__l {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #1f527f;
      clip-path: polygon(18% 0, 18% 82%, 50% 82%, 50% 100%, 0 100%, 0 0);
      z-index: 100;
    }
  }

  .graphic {
    position: absolute;
    top: 35%;
    left: 0;
    width: 16rem;
    height: 1rem;
    background-color: ${colors.colorTertiary};

    @media (min-width: 1025px) {
      top: 15%;
      width: 8rem;
    }

    @media (min-width: 1100px) {
      top: 35%;
      width: 10rem;
    }

    @media (min-width: 1250px) {
      width: 16rem;
    }
  }
`

export default Intro
