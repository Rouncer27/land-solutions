import React from "react"
import styled from "styled-components"
import {
  B1OffBlack,
  colors,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"

const ListLinks = ({ data, title }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <ul>
          {data.map((link, index) => {
            return (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.url}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
    max-width: 75rem !important;
  }

  .title {
    width: 100%;

    h2 {
      ${H3Blue};
    }
  }

  ul {
    width: 100%;
    li {
      ${B1OffBlack};

      a {
        ${B1OffBlack};

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }
  }
`

export default ListLinks
