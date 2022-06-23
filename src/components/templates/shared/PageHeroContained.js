import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Btn1Three, H3White, medWrapper } from "../../../styles/helpers"

const PageHeroContained = ({ data }) => {
  const imageDisplay = getImage(
    data.pageHeroContainedImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageHeroContainedImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          <div className="content__inner">
            <div
              dangerouslySetInnerHTML={{
                __html: data.pageHeroContainedContent,
              }}
            />
            <div>
              <Link to={`/${data.pageHeroContainedSlug}`}>
                {data.pageHeroContainedButtonText}
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    min-height: 30rem;
    padding: 0;
    position: relative;

    @media (min-width: 768px) {
      min-height: 50rem;
    }

    @media (min-width: 1025px) {
      min-height: 60rem;
      max-width: 119rem !important;
    }
  }

  .content {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      256deg,
      rgba(0, 51, 70, 0.7) 80%,
      rgba(0, 0, 0, 0) 80%
    );
    z-index: 100;

    @media (min-width: 768px) {
      width: 55%;
    }

    &__inner {
      padding-left: 15rem;
      padding-right: 6rem;

      p {
        ${H3White};
      }

      a {
        ${Btn1Three};
      }
    }
  }

  .image {
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
`

export default PageHeroContained
