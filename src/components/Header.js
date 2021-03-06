import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { BigWrapper, colors } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import MainNav from "./MainNav/MainNav"
import MobileNav from "./MobileNav/MobileNav"

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
      <MobileNav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  border-bottom: solid 0.1rem #1f527f;
  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.51);

  .header__wrapper {
    ${BigWrapper};
    align-items: center;

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
    display: none;
    width: 100%;

    @media (min-width: 768px) {
      display: block;
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 100%;
    }

    @media (min-width: 1100px) {
      width: 85%;
    }

    @media (min-width: 1200px) {
      width: 80%;
    }
  }
`

export default Header
