import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  H1White,
  H3White,
  medWrapper,
  B1White,
  H2White,
  fonts,
  colors,
} from "../../../styles/helpers"

const PageHeroWysiwyg = ({ data }) => {
  const imageDisplay = getImage(
    data.pageHeroWithWysiwygBackgroundImage.localFile.childImageSharp
      .gatsbyImageData
  )
  const imageAlt = data.pageHeroWithWysiwygBackgroundImage.altText
  return (
    <SectionStyled>
      <div className="hero-content">
        <div className="hero-content__inner">
          <div className="hero-content__inner--titles">
            <h1>{data.pageHeroWithWysiwygTitle}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.pageHeroWithWysiwygIntroContent,
              }}
            />
          </div>
          <div
            className="hero-content__inner--wysiwyg"
            dangerouslySetInnerHTML={{
              __html: data.pageHeroWithWysiwygWysiwyg,
            }}
          />
        </div>
      </div>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
        <div className="hero-image__overlay" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;

  @media (min-width: 768px) {
  }

  @media (min-width: 1025px) {
    min-height: 55rem;
  }

  .hero-content {
    ${medWrapper};
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 5;

    @media (min-width: 768px) {
    }

    @media (min-width: 1025px) {
      width: 100%;
      height: 100%;
      padding: 10rem 2rem;
    }

    &__inner {
      @media (min-width: 1025px) {
        padding-left: calc(17.5%);
      }

      &--titles {
        h1 {
          ${H2White};
        }

        p {
          ${H3White};
        }
      }

      &--wysiwyg {
        width: 100%;
        width: 100%;
        max-width: 100rem;
        margin-top: 2.5rem;
        margin-right: auto;
        margin-bottom: 2.5rem;
        margin-left: auto;

        &::after {
          display: table;
          clear: both;
          content: "";
        }

        .post-edit-link {
          font-size: 1.6rem;
        }

        blockquote {
          display: block;
          width: 95%;
          margin: 1.5rem auto 2rem;
          padding: 0 2.25rem;
          border-right: 5px solid ${colors.grey};
          border-left: 5px solid ${colors.grey};
          font-size: 1.6rem;
          font-style: $italic;

          @media (min-width: 768px) {
            width: 80%;
            margin: 5em auto;
            padding: 0 3rem;
          }

          p {
            margin-bottom: 0;

            &::before,
            &::after {
              font-family: ${fonts.fontAwesome};
              color: rgba($color-secondary, 1);
            }

            &::before {
              padding-right: 0.25em;
              content: "\f10d";
            }

            &::after {
              padding-left: 0.25em;
              content: "\f10e";
            }
          }
        }

        hr {
          display: block;
          height: 0.25em;
          background-color: ${colors.colorSecondary};
        }

        ul {
          margin-bottom: 2.5rem;

          li {
            ${B1White};
            position: relative;
            margin-bottom: 0.25em;
            padding-left: 0.75em;
            font-size: 1.6rem;

            &::before {
              font-family: ${fonts.fontAwesome};
              position: absolute;
              top: 1.2em;
              left: 0;
              padding-right: 0.75em;
              color: rgba($grey, 0.75);
              font-size: 0.75rem;
              content: "\f111";
            }
          }
        }

        ol {
          margin-bottom: 2.5rem;
          margin-left: 1.75rem;
          font-size: 1.6rem;

          li {
            ${B1White};
            position: relative;
            margin-bottom: 0.75em;
            font-size: 1.6rem;
            margin-bottom: 0.25rem;
            list-style-position: outside;
            list-style-type: decimal;
          }
        }

        strong {
          font-weight: bold;
        }

        em {
          font-style: $italic;
        }

        h1,
        h2 {
          ${H1White};
          margin-top: 10rem;
        }

        h3 {
          ${B1White};
          margin-bottom: 5rem;
        }

        h4 {
          ${H2White}
        }

        h5 {
          ${H2White}
        }

        h6 {
          ${H2White}
        }

        p {
          ${B1White};

          a {
            ${B1White};
            transition: all 0.3s;
            color: #636466;
            font-weight: bold;
            font-size: 1em;

            &:hover {
              color: ${colors.colorSecondary};
            }
          }
        }

        a {
          ${B1White};
          transition: all 0.3s;
          color: #636466;
          font-weight: bold;
          font-size: 1em;

          &:hover {
            color: ${colors.colorPrimary};
          }
        }

        del {
          color: ${colors.colorSecondary};
        }

        /* WordPress Core */
        .alignnone {
          margin: 5px 20px 20px 0;
        }

        .aligncenter,
        div.aligncenter {
          display: block;
          margin: 2rem auto;
        }

        .alignright {
          float: right;
          margin: 5px 0 20px 20px;
        }

        .alignleft {
          float: left;
          margin: 5px 20px 20px 0;
        }

        a img.alignright {
          float: right;
          margin: 5px 0 20px 20px;
        }

        a img.alignnone {
          margin: 5px 20px 20px 0;
        }

        a img.alignleft {
          float: left;
          margin: 5px 20px 20px 0;
        }

        a img.aligncenter {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .wp-caption {
          background: #fff;
          border: 1px solid #f0f0f0;
          max-width: 96%; /* Image does not overflow the content area */
          padding: 5px 3px 10px;
          text-align: center;
        }

        .wp-caption.alignnone {
          margin: 5px 20px 20px 0;
        }

        .wp-caption.alignleft {
          margin: 5px 20px 20px 0;
        }

        .wp-caption.alignright {
          margin: 5px 0 20px 20px;
        }

        .wp-caption img {
          border: 0 none;
          height: auto;
          margin: 0;
          max-width: 98.5%;
          padding: 0;
          width: auto;
        }

        .wp-caption p.wp-caption-text {
          font-size: 1.1rem;
          line-height: 17px;
          margin: 0;
          padding: 0 4px 5px;
        }

        /* Text meant only for screen readers. */
        .screen-reader-text {
          clip: rect(1px, 1px, 1px, 1px);
          position: absolute !important;
          height: 1px;
          width: 1px;
          overflow: hidden;
        }

        .screen-reader-text:focus {
          background-color: #f1f1f1;
          border-radius: 3px;
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
          clip: auto !important;
          color: #21759b;
          display: block;
          font-size: 14px;
          font-size: 0.875rem;
          font-weight: bold;
          height: auto;
          left: 5px;
          line-height: normal;
          padding: 15px 23px 14px;
          text-decoration: none;
          top: 5px;
          width: auto;
          z-index: 100000; /* Above WP toolbar. */
        }

        img {
          width: auto;
        }
      }
    }
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

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

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      background-color: #003346;
      z-index: 10;
    }
  }
`

export default PageHeroWysiwyg
