import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  H3Blue,
  medWrapper,
  standardWrapper,
} from "../../../styles/helpers"

const Members = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.map((member, index) => {
          const imageDisplay = getImage(
            member.node.advisoryBoardPost.bioImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = member.node.advisoryBoardPost.bioImage.altText
          return (
            <div className="board-member" key={index}>
              <div className="board-member__image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="board-member__content">
                <h3>{member.node.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: member.node.advisoryBoardPost.bioContent,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .board-member {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 4rem;

    &__image {
      width: 100%;
      max-width: 17.5rem;
      margin-left: 0;
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        width: calc(20%);
        margin-top: 1rem;
        margin-bottom: 0;
      }

      @media (min-width: 1025px) {
        width: calc(15%);
      }
    }

    &__content {
      @media (min-width: 768px) {
        width: calc(80%);
        padding: 0 2rem;
      }

      @media (min-width: 1025px) {
        width: calc(85%);
        padding: 0 3rem;
      }

      h3 {
        ${H3Blue};
        margin: 0;
        margin-bottom: 2rem;
      }

      p {
        ${B1Black};
      }
    }
  }
`

export default Members
