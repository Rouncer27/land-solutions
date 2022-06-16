import React from "react"
import styled from "styled-components"
import { colors, H3Green, medWrapper } from "../../../styles/helpers"

const TopTitle = () => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>Leadership Team</h2>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-bottom: 2.5rem;

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    border-bottom: 0.1rem solid ${colors.colorSecondary};

    h2 {
      ${H3Green};
      margin-bottom: 0;
      font-weight: 300;
    }
  }
`

export default TopTitle
