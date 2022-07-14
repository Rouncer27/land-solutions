import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Black,
  B2Green,
  colors,
  H3Green,
  medWrapper,
  fonts,
} from "../../../styles/helpers"

const LeadershipTeam = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.map(team => {
          const imageDisplay = getImage(
            team.node.postLeadershipTeam.image.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = team.node.postLeadershipTeam.image.altText

          return (
            <TeamMember key={team.node.id}>
              <div className="bio-image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="bio-content">
                <h2>
                  {team.node.postLeadershipTeam.firstName}{" "}
                  {team.node.postLeadershipTeam.lastName}
                </h2>
                <p>{team.node.postLeadershipTeam.jobTitle}</p>
                <Link to={`/about/leadership-team/${team.node.slug}`}>
                  Meet {team.node.postLeadershipTeam.firstName} <span />
                </Link>
              </div>
            </TeamMember>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }
`

const TeamMember = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  transition: all 0.3s ease-out;
  box-shadow: 4px 5px 10px 0 rgba(0, 0, 0, 0.16);
  border: solid 2px ${colors.colorTertiary};

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
    margin: 3rem 0.5rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.33333333% - 2rem);
    margin: 3rem 1rem;
  }

  &:hover {
    box-shadow: 4px 5px 15px 5px rgba(0, 0, 0, 0.4);
  }

  .bio-content {
    padding: 2rem;
    text-align: center;
    border-top: solid 0.9rem ${colors.colorAccent};

    h2 {
      ${H3Green};
      text-transform: uppercase;
    }

    p {
      ${B2Black};
      font-weight: 600;
    }

    a {
      ${B2Green};
      font-weight: 600;

      span {
        &::before {
          font-family: ${fonts.fontAwesome};
          content: "\f078";
        }
      }
    }
  }
`

export default LeadershipTeam
