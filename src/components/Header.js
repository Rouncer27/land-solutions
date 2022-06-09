import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { BigWrapper, colors, medWrapper } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import MainNav from "./MainNav/MainNav"

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
        <div className="headerNav">
          <MainNav />
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;

  .header__wrapper {
    ${BigWrapper};
    align-items: center;
    border: 1px solid red;

    @media (min-width: 1025px) {
    }
  }

  .headerLogo {
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 30%;
    }

    @media (min-width: 1100px) {
      width: 20%;
    }

    @media (min-width: 1200px) {
      width: 15%;
    }

    a {
      width: 100%;
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid ${colors.colorPrimary};
        transition: outline-width 0.35s ease-in-out;
      }
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

  .headerNav {
    width: 100%;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 70%;
    }

    @media (min-width: 1100px) {
      width: 80%;
    }

    @media (min-width: 1200px) {
      width: 85%;
    }
  }
`

export default Header
