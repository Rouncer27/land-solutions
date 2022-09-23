import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainLogo from "./Logos/MainLogo"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <div className="header__wrapper">
        <div className="headerLogo">
          <h1>
            <Link to="/">
              <MainLogo />
              <span>{siteTitle}</span>
            </Link>
          </h1>
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: absolute;
  left: -999%;

  .headerLogo {
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 100%;
    }

    @media (min-width: 1100px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 20%;
    }

    a {
      width: 100%;
      display: block;
      margin: auto;
    }

    h1 {
      width: 100%;
      margin: 0;
      padding: 0;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
        max-width: 45rem;
        margin: 2rem auto;
      }

      @media (min-width: 1025px) {
        width: calc(100%);
        max-width: 100%;
        margin: auto;
      }
    }
  }
`

export default Header
