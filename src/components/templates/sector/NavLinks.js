import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H2Green, medWrapper, B1Green } from "../../../styles/helpers"

import waves from "../../../images/waves.png"

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
                {index + 1 !== data.sectionNavigationLinks.length ? (
                  <span>&#124;</span>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="wave-bg" />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-bottom: 7.5rem;
  }

  @media (min-width: 1025px) {
    margin-bottom: 9rem;
  }

  .wave-bg {
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
    height: 30rem;
    background-image: url(${waves});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }

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
      padding: 0.25rem 0.5rem;
      word-wrap: wrap;

      span {
        ${B1Green}
        display: inline-block;
        padding-left: 0.75rem;
      }

      a {
        ${B1Green}
        word-wrap: wrap;
      }
    }
  }
`

export default NavLinks
