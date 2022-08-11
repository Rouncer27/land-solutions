import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1Black,
  colors,
  H2Blue,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"

const ContentImage = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.homeContentWithLinkTitle}</h2>
          <p>{data.homeContentWithLinkSubTitle}</p>
          <Link to={`/${data.homeContentWithLinkButtonSlug}`}>
            {data.homeContentWithLinkButtonText} <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    max-width: 77.5rem;

    h2 {
      ${H2Blue};
    }

    p {
      ${H3Blue};
    }

    a {
      ${B1Black};

      &:hover {
        color: ${colors.colorPrimary};
      }
    }
  }
`

export default ContentImage
