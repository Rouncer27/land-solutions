import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H2Green, medWrapper, B1Green } from "../../../styles/helpers"

const NavLinks = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <h2>{data.sectionNavigationLinksTitle}</h2>
        <ul>
          {data.sectionNavigationLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={`${link.slug}`}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  h2 {
    ${H2Green};
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    li {
      display: block;
      padding: 0.25rem 0.75rem;
      word-wrap: wrap;

      a {
        ${B1Green}
        word-wrap: wrap;
      }
    }
  }
`

export default NavLinks
