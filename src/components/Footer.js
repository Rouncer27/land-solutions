import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B2White, colors, medWrapper, fontSizer } from "../styles/helpers"

import FooterLogo from "./Logos/FooterLogo"
import Twitter from "./Icons/Twitter"
import Linkedin from "./Icons/Linkedin"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-sector footer-sec">
          <h3>What sector are you in?</h3>
          <ul>
            <li>
              <Link to="/sectors/renewable-energy">Renewable Energy</Link>
            </li>
            <li>
              <Link to="/sectors/power-generation-transmission-distribution">
                Power Generation Transmission & Distribution
              </Link>
            </li>
            <li>
              <Link to="/sectors/public-infrastructure">
                Public Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/sectors/telecommunications">Telecommunications</Link>
            </li>
            <li>
              <Link to="/sectors/midstream">Midstream</Link>
            </li>
            <li>
              <Link to="/sectors/upstream">Upstream</Link>
            </li>
          </ul>
        </div>
        <div className="footer-about footer-sec">
          <h3>About Landsolutions</h3>
          <ul>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
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
              <Link to="/our-advantage/asset-management">Asset Management</Link>
            </li>
            <li>
              <Link to="/our-advantage/indigenous-engagement">
                Indigenous Engagement
              </Link>
            </li>
            <li>
              <Link to="/our-advantage/environmental">Environmental</Link>
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
            <p>
              Connect with us{" "}
              <StyledIcon>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Follow us on Twitter - Link will open in new window"
                  href={`https://twitter.com/LandSolutions_`}
                >
                  <i>
                    <Twitter />
                    <span className="visuallyhidden">Twitter</span>
                  </i>
                </a>
              </StyledIcon>
              <StyledIcon>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Follow us on Linkedin - Link will open in new window"
                  href={`https://www.linkedin.com/company/landsolutions-lp`}
                >
                  <i>
                    <Linkedin />
                    <span className="visuallyhidden">Linkedin</span>
                  </i>
                </a>
              </StyledIcon>
            </p>
          </div>
        </div>
        <div className="footer-copy">
          <p>
            Landsolutions © 2022. Designed, and developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://switchbackcreative.ca/"
            >
              Switchback Creative
            </a>
            {" -- "}
            <Link to="/disclaimer">Disclaimer</Link>
            {" | "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
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

  a:hover {
    color: ${colors.colorAccent};
  }

  .footer-sec {
    width: 100%;

    text-align: center;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin: 0 1rem;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(30% - 2rem);
      margin: 0 1rem;
    }
  }

  .footer-sector {
    margin-bottom: 3.5rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
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

  .footer-logo__social {
    text-align: center;
    display: flex;
    justify-content: center;

    p {
      display: flex;
      align-items: center;
    }
  }

  .footer-copy {
    width: 100%;
    margin-top: 4rem;
    text-align: center;

    p,
    a {
      ${B2White};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.2)}
      margin: 0;
    }

    a:hover {
      color: ${colors.colorAccent};
    }
  }
`

const StyledIcon = styled.span`
  display: inline-block;
  margin-right: 0;
  margin-left: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
    @media (min-width: 1025px) {
      width: 3rem;
      height: 3rem;
    }

    &:focus {
      outline: 0.4rem solid ${colors.colorPrimary};
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    &:hover {
      svg {
        fill: ${colors.colorAccent};
      }
    }
  }
`

export default Footer
