import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B2White, colors, medWrapper } from "../styles/helpers"

import FooterLogo from "./Logos/FooterLogo"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-start">
          <h3>Start a Project</h3>
          <p>We are here to help you get started.</p>
        </div>
        <div className="footer-sector">
          <h3>What sector are you in?</h3>
          <p>Find the sector you are interested in and learn more.</p>
        </div>
        <div className="footer-about">
          <h3>About Landsolutions</h3>
          <ul>
            <li>
              <Link to="/our-advantage/project-management">
                Project management
              </Link>
            </li>
            <li>
              <Link to="/our-advantage/talent-sourcing">Talent sourcing</Link>
            </li>
            <li>
              <Link to="/our-advantage/stakeholder-engagement">
                Stakeholder Engagement
              </Link>
            </li>
            <li>
              <Link to="/our-advantage/indigenous-engagement">
                Indigenous Engagement
              </Link>
            </li>
            <li>
              <Link to="/our-advantage/asset-management">Asset Management</Link>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div className="footer-logo__logo">
            <Link to="/">
              <FooterLogo />
            </Link>
          </div>
          <div className="footer-logo__social">
            <p>Connect with us on Twitter</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
  }

  h3,
  p,
  a {
    ${B2White};
  }

  h3 {
    text-transform: uppercase;
  }

  .footer-start {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin: 0 1rem;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(20% - 2rem);
      margin: 0 1rem;
    }
  }

  .footer-sector {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin: 0 1rem;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(20% - 2rem);
      margin: 0 1rem;
    }
  }

  .footer-about {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin: 0 1rem;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(20% - 2rem);
      margin: 0 1rem;
    }
  }

  .footer-logo {
    width: 100%;

    @media (min-width: 768px) {
      width: 25%;
    }

    @media (min-width: 1025px) {
      width: 20%;
      margin-top: -2.5rem;
      margin-left: 20%;
    }

    p {
      text-align: center;
    }
  }
`

export default Footer
