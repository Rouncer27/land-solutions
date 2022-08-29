import React from "react"
import styled from "styled-components"
import {
  B1OffBlack,
  colors,
  H3Blue,
  medWrapper,
  standardWrapper,
} from "../../../styles/helpers"

const ListLinks = ({ bgcolor, data, title }) => {
  return (
    <StyledSection bgcolor={bgcolor}>
      <div className="wrapper">
        <div className="content">
          <div className="title">
            <h2>{title}</h2>
          </div>
          {data && data.length > 0 && (
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
          )}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 5rem 0;
  background-color: ${props =>
    props.bgcolor ? "rgba(157, 181, 148, 0.1)" : "transparent"};

  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 5rem;
  }

  .wrapper {
    ${medWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: 82%;
      margin-right: auto;
      margin-left: 18%;
    }
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
        text-decoration: underline;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }
  }
`

export default ListLinks
