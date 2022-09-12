import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1White,
  Btn1One,
  colors,
  H2White,
  medWrapper,
} from "../../../../styles/helpers"

const SubSectionOne = ({ data }) => {
  const imageDisplay = getImage(
    data.backgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.backgroundImage.altText

  const imageSmallDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageSmallAlt = data.image.altText
  return (
    <SectionStyled id={data.sectionId ? data.sectionId : ""}>
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
          </div>
        </div>

        <div className="navigation">
          <h2>{data.navigationTitle}</h2>
          <ul>
            {data.navigationLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={`${link.slug}`}>{link.text}</Link>
                  {index + 1 !== data.navigationLinks.length ? (
                    <span>&#124;</span>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="bottom-box">
          <h2>{data.bottomBoxContent}</h2>
          <Link to={`/${data.bottomBoxSlug}`}>{data.bottomBoxText}</Link>
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
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  min-height: 40rem;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 80rem;
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

    &__image {
      width: 100%;
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        width: calc(30% - 2rem);
        margin-right: 2rem;
        margin-bottom: 0;
      }
    }

    &__paragraphs {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(70% - 2rem);
        margin-left: 2rem;
      }

      @media (min-width: 768px) {
        width: calc(70% - 4rem);
        margin-left: 4rem;
      }

      h2 {
        ${H2White};
      }

      p {
        ${B1White};
      }
    }
  }

  .navigation {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;

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
    }

    h2 {
      ${H2White};
      width: 100%;
      text-align: center;
      text-transform: uppercase;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      word-wrap: wrap;

      li {
        display: block;
        padding: 0.25rem 0.5rem;
        word-wrap: wrap;
        word-break: break-all;

        span {
          ${B1White}
          display: inline-block;
          padding-left: 0.75rem;
          word-wrap: wrap;
          word-break: break-all;
        }

        a {
          ${B1White}
          word-wrap: wrap;
          word-break: break-all;

          &:hover {
            color: ${colors.colorAccent};
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

export default SubSectionOne
