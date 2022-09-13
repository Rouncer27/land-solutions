import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  B2Black,
  colors,
  H3Green,
  medWrapper,
  H1Blue,
} from "../../../styles/helpers"

const PdfUploader = ({ data }) => {
  const imageDisplay = getImage(
    data.pdfUploaderContentImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pdfUploaderContentImage.altText

  const iconDisplay = getImage(
    data.pdfUploaderContentThumbnail.localFile.childImageSharp.gatsbyImageData
  )
  const iconAlt = data.pdfUploaderContentThumbnail.altText
  return (
    <StyledSection id={data.pdfUploaderContentSectionId}>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{data.pdfUploaderContentTitle}</h2>
            <h3>{data.pdfUploaderContentSubTitle}</h3>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.pdfUploaderContentContent }}
          />
          <div className="download-link">
            <div className="download-link__icon">
              <a href={`${data.pdfUploaderContentPdf.localFile.url}`}>
                <GatsbyImage
                  image={iconDisplay}
                  alt={iconAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </a>
            </div>
            <div className="download-link__links">
              <p>{data.pdfUploaderContentDownloadTitle}</p>
              <a href={`${data.pdfUploaderContentPdf.localFile.url}`}>
                {data.pdfUploaderContentButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(40%);
    }

    @media (min-width: 1025px) {
      width: calc(37.5%);
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(60% - 3rem);
      margin-left: 3rem;
    }

    @media (min-width: 1025px) {
      width: calc(62.5% - 3rem);
      margin-left: 3rem;
    }

    h2 {
      ${H1Blue};
      margin-top: 0;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    h3 {
      ${H3Green};
      margin: 0;
    }

    p {
      ${B1Black};
    }

    &__title {
      margin-top: 2.5rem;
      margin-bottom: 2rem;
      border-bottom: 0.2rem solid ${colors.colorTertiary};

      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    .download-link {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      &__icon {
        width: 100%;
        max-width: 12.5rem;
        margin-left: 0;
        margin-right: auto;

        @media (min-width: 768px) {
          width: calc(20%);
          max-width: 100%;
        }
      }

      &__links {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(80% - 3rem);
          margin-left: 3rem;
        }

        p {
          ${B2Black};
          margin-bottom: 2rem;
          text-transform: uppercase;

          @media (min-width: 768px) {
            margin: 0;
          }
        }

        a {
          ${H3Green};
          margin: 0;
          font-weight: 300;
          text-decoration: underline;

          &:hover {
            color: ${colors.colorAccent};
          }
        }
      }
    }
  }
`

export default PdfUploader
