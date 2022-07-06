import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1OffBlack,
  B2Black,
  Btn1One,
  colors,
  H2White,
  H3LightGreen,
  medWrapper,
} from "../../../../styles/helpers"

const SubSectionthree = ({ data }) => {
  const imageDisplay = getImage(
    data.backgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.backgroundImage.altText

  const imageSmallDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageSmallAlt = data.image.altText

  const imagePdfDisplay = getImage(
    data.pdfThumbnail.localFile.childImageSharp.gatsbyImageData
  )
  const imagePdfAlt = data.pdfThumbnail.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          <div className="content__image">
            <GatsbyImage
              image={imageSmallDisplay}
              alt={imageSmallAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="content__paragraphs">
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />

            <div className="pdf-download">
              <div className="pdf-download__thumbnail">
                <GatsbyImage
                  image={imagePdfDisplay}
                  alt={imagePdfAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="pdf-download__button">
                <p>View or Download</p>
                <a href={`${data.pdfFile.localFile.url}`}>
                  {data.downloadText}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-box">
          <h2>{data.bottomBoxTitle}</h2>
          <Link to={`/${data.bottomBoxButtonSlug}`}>
            {data.bottomBoxButtonText}
          </Link>
        </div>
      </div>
      <div className="background-image">
        <div className="background-image__wrapper">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="background-image__overlay" />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  min-height: 40rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    min-height: 50rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1025px) {
    min-height: 80rem;
    margin-bottom: 7.5rem;
  }

  .wrapper {
    ${medWrapper};
    position: relative;
    padding: 4rem 2rem;
    z-index: 100;

    @media (min-width: 768px) {
      padding: 6rem 2rem;
    }
    @media (min-width: 1025px) {
      padding: 10rem 2rem;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem auto;
    padding: 5rem 3rem;
    max-width: 120rem;
    background-color: ${colors.white};

    &__image {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(40% - 2rem);
        margin-right: 2rem;
      }
    }

    &__paragraphs {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(60% - 2rem);
        margin-left: 2rem;
      }

      @media (min-width: 768px) {
        width: calc(60% - 4rem);
        margin-left: 4rem;
      }

      h2 {
        ${H3LightGreen};
      }

      p {
        ${B1OffBlack};
      }

      .pdf-download {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin-top: 5rem;

        &__thumbnail {
          width: 100%;
          max-width: 12.5rem;
          margin-right: auto;
          margin-bottom: 2.5rem;
          margin-left: 0;

          @media (min-width: 768px) {
            width: calc(25%);
            max-width: 100%;
            margin-bottom: 0;
          }
        }

        &__button {
          width: 100%;

          @media (min-width: 768px) {
            width: calc(75%);
            padding-bottom: 1rem;
          }

          p {
            ${B2Black};
            margin: 0;
            text-transform: uppercase;
          }

          a {
            ${H3LightGreen};
            font-weight: 300;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .bottom-box {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2.75rem 2rem;
    border-radius: 7px;
    box-shadow: 2px 4px 7px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #fff;

    @media (min-width: 768px) {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    @media (min-width: 1025px) {
      max-width: 97.5rem;
      margin-top: 6rem;
      margin-right: auto;
      margin-bottom: 6rem;
      margin-left: auto;
      padding: 2.75rem 10rem;
    }

    h2 {
      ${H2White};
      margin-bottom: 5rem;
      font-weight: 300;
    }

    a {
      ${Btn1One};
      text-transform: uppercase;
    }
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .background-image__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 51, 70, 0.8);
      z-index: 10;
    }

    .background-image__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

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
`

export default SubSectionthree
