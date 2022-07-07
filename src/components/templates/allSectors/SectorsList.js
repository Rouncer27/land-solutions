import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, H2Green, standardWrapper } from "../../../styles/helpers"

const SectorsList = ({ data, sectors }) => {
  return (
    <StyledSection>
      <ul className="wrapper">
        {sectors.map(sector => {
          const imageDisplay = getImage(
            sector.node.sectors.navigationIcon.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = sector.node.sectors.navigationIcon.altText
          return (
            <li key={sector.node.id}>
              <Link to={`/sectors/${sector.node.slug}`}>
                <span className="icon">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </span>
                <span className="title">{sector.node.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${colors.colorSecondary};

  @media (min-width: 1025px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .wrapper {
    ${standardWrapper};
    max-width: 85rem !important;

    li {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background-color: ${colors.white};
      box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.42);

      a {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 3rem 4rem;

        .icon {
          width: 15%;
          padding: 1rem;
        }
        .title {
          ${H2Green};
          width: 85%;
          font-weight: 300;
        }
      }
    }
  }
`

export default SectorsList
