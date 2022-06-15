import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1White,
  H2Green,
  H2White,
  fonts,
  H1White,
  colors,
} from "../../../styles/helpers"
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
    padding: 5rem 2rem;
    background: rgba(31, 82, 127, 0.9);

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
    padding: 5rem 2rem;
    background: rgba(0, 51, 70, 0.7);

    @media (min-width: 768px) {
      width: calc(50%);
      background: linear-gradient(
        255deg,
        rgba(0, 51, 70, 0.7) 81%,
        rgba(0, 0, 0, 0) 81%
      );
    }

    @media (min-width: 1025px) {
      padding: 9rem 6rem;
      padding-left: 15rem;
    }

    @media (min-width: 1400px) {
      padding: 12.5rem 6rem;
      padding-left: 20rem;
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

    &__wysiwyg {
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
          margin-bottom: 0.75em;
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
`

const LearnLink = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 4rem 2rem 8rem;
  margin: auto;

  @media (min-width: 768px) {
    padding: 4rem 2rem 8rem;
  }

  a {
    ${H2Green};
    font-weight: 300;
  }
`

export default Hero
