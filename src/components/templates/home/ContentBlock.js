import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  Btn1One,
  colors,
  H2Green,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"

const ContentBlock = ({ data }) => {
  console.log("data: ", data)
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <h2>{data.contentBlockTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.contentBlockContent }} />
          <div>
            <Link to={`/${data.contentBlockButtonSlug}`}>
              {data.contentBlockButtonText}
            </Link>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 4rem 0;

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

    h2 {
      ${H2Green};
      margin-bottom: 1.5rem;
    }

    p {
      ${H3Blue};
      margin-bottom: 1.5rem;
    }

    a {
      ${Btn1One};
    }
  }
`

export default ContentBlock
