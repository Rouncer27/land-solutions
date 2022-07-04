import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1OffBlack,
  H3Blue,
  H2White,
  B1White,
  Btn1Three,
  standardWrapper,
} from "../../../styles/helpers"

const LinkListBlock = ({ data }) => {
  const imageDisplay = getImage(
    data.pageListBesideBlockImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageListBesideBlockImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="links">
          <h2>{data.pageListBesideBlockTitle}</h2>

          <ul>
            {data.pageListBesideBlockLinkList.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={`/${link.slug}`}>
                    {link.text} <span>&#8594;</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
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
              <h2>{data.pageListBesideBlockBlockTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.pageListBesideBlockBlockContent,
                }}
              />
              <div className="content__link">
                <Link to={`/${data.pageListBesideBlockBlockButtonSlug}`}>
                  {data.pageListBesideBlockBlockButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .links {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin: 2rem 1rem;
    }

    h2 {
      ${H3Blue};
    }

    ul {
      width: 100%;

      li {
        ${B1OffBlack};

        a {
          ${B1OffBlack};

          span {
            color: #336a6a;
            font-weight: bold;
          }
        }
      }
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
      @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 75%;
        height: 100%;
        padding-left: 20%;
        background: linear-gradient(
          255deg,
          rgba(31, 82, 127, 1) 81%,
          rgba(0, 0, 0, 0) 81%
        );
      }

      &__inner {
        padding-top: 8.5rem;
      }

      &__link {
        position: absolute;
        bottom: 2rem;
        right: 4rem;

        a {
          ${Btn1Three};
          text-transform: uppercase;
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

export default LinkListBlock
