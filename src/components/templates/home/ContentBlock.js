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

const ContentBlock = ({ displaybg, data }) => {
  return (
    <SectionStyled displaybg={displaybg}>
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
      <div className="graphic-bg" />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }

  .graphic-bg {
    display: ${props => (props.displaybg ? "block" : "none")};
    position: absolute;
    top: -140%;
    left: 0;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      30deg,
      rgba(243, 245, 239, 1) 25%,
      rgba(255, 255, 255, 0) 25%
    );
    z-index: -1;
  }

  .wrapper {
    ${standardWrapper};
  }

  .content {
    width: 100%;
    padding: 3.5rem;
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
