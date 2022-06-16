import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B2LightGreen,
  Btn1One,
  H2Green,
  medWrapper,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const LeaderContent = ({ data, next, prev }) => {
  const imageDisplay = getImage(
    data.postLeadershipTeam.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.postLeadershipTeam.image.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="bio-image">
          <div>
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="bio-image__link">
            <Link to="/about/leadership-team/">Return to team</Link>
          </div>
        </div>
        <div className="bio-content">
          <h1>
            {data.postLeadershipTeam.firstName}{" "}
            {data.postLeadershipTeam.lastName}
            <span> &#8211; </span>
            {data.postLeadershipTeam.jobTitle}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.postLeadershipTeam.bioContent,
            }}
          />
          <div className="bio-content__nav">
            {prev && (
              <>
                <Link to={`/about/leadership-team/${prev}`}>
                  Prev Team Member
                </Link>
                <span> ----------------- </span>
              </>
            )}
            <Link to="/about/leadership-team/">Return to team</Link>

            {next && (
              <>
                <span> ----------------- </span>
                <Link to={`/about/leadership-team/${next}`}>
                  Next Team Member
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .bio-image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(25%);
    }

    @media (min-width: 1025px) {
      width: calc(25% - 4rem);
      margin-right: 4rem;
    }

    &__link {
      width: 100%;
      margin-top: 2.5rem;

      a {
        ${Btn1One};
      }
    }
  }

  .bio-content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(75%);
    }

    @media (min-width: 1025px) {
      width: calc(75%);
    }

    h1 {
      ${H2Green};
      margin-top: 0;
    }

    p {
      ${B1Black};
    }

    &__nav {
      width: 100%;
      margin-top: 5rem;
      margin-bottom: 5rem;

      a {
        ${B2LightGreen};
      }
    }
  }
`

export default LeaderContent
