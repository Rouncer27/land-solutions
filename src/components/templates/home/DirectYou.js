import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  colors,
  H3Blue,
  H3Green,
  standardWrapper,
} from "../../../styles/helpers"

import icon from "../../../images/direct-icon.png"

const DirectYou = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="icon">
          <img src={icon} alt="How can we direct you?" />
        </div>
        <div className="content">
          <h2>{data.directYouTitle}</h2>
          <div className="content__list">
            {data.directYouLinks.map((item, index) => (
              <p key={index}>
                <Link to={`/${item.linkSlug}`}>{item.linkText}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="not-sure">
        <p>
          Not sure exactly what your project needs?{" "}
          <Link to="/contact">Connect for a conversation</Link>
        </p>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
    align-items: flex-end;
  }

  .icon {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(10% - 2rem);
      margin-right: 2rem;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: 90%;
    }

    h2 {
      ${H3Blue};
    }

    &__list {
      width: 100%;

      p {
        ${H3Green};
        margin-bottom: 0;
      }

      a {
        ${H3Green};
        font-weight: 300;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }
  }

  .not-sure {
    position: relative;
    width: 100%;
    margin-top: 5rem;

    @media (min-width: 768px) {
    }

    @media (min-width: 1025px) {
      padding-left: 15%;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 0%;
      height: 1rem;
      transform: translateY(-40%);
      background-color: #9db594;
      content: "";
    }

    @media (min-width: 768px) {
      &::after {
        width: 13%;
      }
    }

    @media (min-width: 1025px) {
      &::after {
        width: 13%;
      }
    }

    p,
    a {
      ${H3Blue};
      font-weight: normal;
    }

    a {
      text-decoration: underline;

      &:hover {
        color: ${colors.colorSecondary};
      }
    }
  }
`

export default DirectYou
