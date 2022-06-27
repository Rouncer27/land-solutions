import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  Btn1One,
  colors,
  H2Blue,
  H3Blue,
  standardWrapper,
} from "../../../../styles/helpers"

const BoxLink = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <p>{data.content}</p>
          <div>
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .content {
    width: 100%;
    border: 0.1rem solid ${colors.colorPrimary};
    border-radius: 0.7rem;
    box-shadow: 2px 4px 7px 0 rgba(0, 0, 0, 0.16);

    @media (min-width: 1025px) {
      padding: 3.5rem 10rem;
    }

    p {
      ${H2Blue};
      margin-bottom: 2.5rem;
    }

    a {
      ${Btn1One};
      text-transform: uppercase;
    }
  }
`
export default BoxLink
