import React from "react"
import { B1Black, BigWrapper, H1Black } from "../../../styles/helpers"
import styled from "styled-components"

const PostTitle = ({ title, excerpt }) => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="wrapper__inner">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  .wrapper {
    ${BigWrapper};

    &__inner {
      width: 100%;
      padding-bottom: 3rem;
      border-bottom: solid 0.1rem #707070;

      h1 {
        ${H1Black};
        margin-bottom: 0.5rem;
        font-weight: normal;
        text-transform: uppercase;
      }

      p {
        ${B1Black};
        margin: 0;
      }
    }
  }
`

export default PostTitle
