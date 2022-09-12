import React from "react"
import styled from "styled-components"
import {
  H1Blue,
  H2Green,
  H3Blue,
  medWrapper,
  B1Black,
  H2White,
  fonts,
  H1White,
  colors,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PageIntro = ({ data }) => {
  const iconDisplay = getImage(
    data.pageIntroIcon.localFile.childImageSharp.gatsbyImageData
  )
  const iconAlt = data.pageIntroIcon.altText

  const sideImgDisplay = getImage(
    data.pageIntroSideImage.localFile.childImageSharp.gatsbyImageData
  )
  const sideImgAlt = data.pageIntroSideImage.altText
  return (
    <StyledSection>
      <div className="side-image">
        <GatsbyImage
          image={sideImgDisplay}
          alt={sideImgAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="wrapper">
        <div className="title">
          <h1>{data.pageIntroMainTitle}</h1>
        </div>
        <div className="content-wrap">
          <div className="content-wrap__icon">
            <GatsbyImage
              image={iconDisplay}
              alt={iconAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>

          <div className="content-wrap__content">
            <div className="content-wrap__content--titles">
              <h2>{data.pageIntroSubTitle}</h2>
              <p>{data.pageIntroBlueContent}</p>
            </div>
            <div
              className="content-wrap__content--wysiwyg"
              dangerouslySetInnerHTML={{ __html: data.pageIntroContent }}
            />
            {data.pageIntroLinkText && data.pageIntroLinkSlug ? (
              <div className="content-wrap__content--link">
                <p>
                  <Link to={`/${data.pageIntroLinkSlug}`}>
                    {data.pageIntroLinkText}
                  </Link>
                  <span>&#8594;</span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .side-image {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }

    @media (min-width: 768px) {
      width: 22.5rem;
    }

    @media (min-width: 1025px) {
      width: 25rem;
    }

    .gatsby-image-wrapper {
      @media (max-width: 768px) {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  .title {
    width: 100%;
    margin-top: 2.5rem;

    @media (min-width: 768px) {
      margin-top: 0;
    }

    h1 {
      ${H1Blue};
      text-transform: uppercase;
    }
  }

  .content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 3.5rem;

    &__icon {
      width: calc(100%);
      max-width: 10rem;
      margin-right: auto;
      margin-left: 0;
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        width: calc(15% - 2rem);
        max-width: 100%;
        margin: 0;
        margin-right: 2rem;
      }

      @media (min-width: 1025px) {
        width: calc(17.5% - 12rem);
        margin-top: 1rem;
        margin-right: 5rem;
        margin-left: 7rem;
      }
    }

    &__content {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(85% - 2rem);
        margin-left: 2rem;
      }

      @media (min-width: 1025px) {
        width: calc(82.5%);
        margin-left: 0;
      }

      &--titles {
        width: 100%;

        h2 {
          ${H2Green};
          max-width: 55rem;
          margin-top: 0;

          @media (min-width: 768px) {
            max-width: 45rem;
          }

          @media (min-width: 1025px) {
            max-width: 60rem;
          }
        }

        p {
          ${H3Blue};
          max-width: 65rem;

          @media (min-width: 768px) {
            max-width: 45rem;
          }

          @media (min-width: 1025px) {
            max-width: 60rem;
          }
        }
      }

      &--wysiwyg {
        width: 100%;
        width: 100%;
        max-width: 100rem;
        margin-top: 2.5rem;
        margin-right: auto;
        margin-bottom: 0;
        margin-left: 0;

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
            ${B1Black};
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
            ${B1Black};
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
          ${B1Black};
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
          ${B1Black};

          a {
            ${B1Black};
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
          ${B1Black};
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

      &--link {
        width: 100%;
        margin-bottom: 3rem;

        p {
          margin: 0;

          span {
            display: inline-block;
            margin-left: 1rem;
            transition: all 0.3s ease-out;
            color: ${colors.black};
          }

          &:hover {
            span {
              color: ${colors.colorAccent};
            }
          }
        }

        a {
          ${B1Black};
          text-decoration: underline;

          &:hover {
            color: ${colors.colorAccent};
          }
        }
      }
    }
  }
`

export default PageIntro
