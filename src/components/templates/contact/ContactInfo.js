import React from "react"
import styled from "styled-components"
import { H3Blue, standardWrapper, colors } from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Twitter from "../../Icons/Twitter"
import Linkedin from "../../Icons/Linkedin"

const ContactInfo = ({ data }) => {
  const sideImgDisplay = getImage(
    data.pageContactInformationLogo.localFile.childImageSharp.gatsbyImageData
  )
  const sideImgAlt = data.pageContactInformationLogo.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="logo">
          <GatsbyImage
            image={sideImgDisplay}
            alt={sideImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>

        <div className="contact">
          <h2>{data.pageContactInformationTitle}</h2>
          <div
            className="contact__wysiwyg"
            dangerouslySetInnerHTML={{
              __html: data.pageContactInformationContent,
            }}
          />
          {data.pageContactInformationDisplaySocialLinks && (
            <div className="social">
              <p>
                <StyledIcon>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Follow us on Twitter - Link will open in new window"
                    href={`https://twitter.com`}
                  >
                    <i>
                      <Twitter />
                      <span className="visuallyhidden">Twitter</span>
                    </i>
                  </a>
                </StyledIcon>
                <StyledIcon>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Follow us on Linkedin - Link will open in new window"
                    href={`https://www.linkedin.com/`}
                  >
                    <i>
                      <Linkedin />
                      <span className="visuallyhidden">Linkedin</span>
                    </i>
                  </a>
                </StyledIcon>
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  @media (min-width: 768px) {
    padding: 9rem 0 0;
  }

  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;

    @media (min-width: 768px) {
      justify-content: center;
      padding-bottom: 0;
    }
  }

  .logo {
    width: 100%;
    max-width: 20rem;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      width: calc(15% - 2rem);
      max-width: 100%;
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }

  .contact {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(85%);
    }

    h2 {
      ${H3Blue};
      margin: 0;
      text-transform: uppercase;
    }

    p {
      ${H3Blue};
    }

    &__wysiwyg {
      a {
        ${H3Blue};

        &:hover {
          color: ${colors.colorAccent};
        }
      }
    }
  }
`

const StyledIcon = styled.span`
  display: inline-block;
  margin-right: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
    @media (min-width: 1025px) {
      width: 4rem;
      height: 4rem;
    }

    &:focus {
      outline: 0.4rem solid ${colors.colorPrimary};
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 2rem;
        height: 2rem;
      }
    }

    &:hover {
      svg {
        fill: ${colors.colorAccent};
      }
    }
  }
`

export default ContactInfo
