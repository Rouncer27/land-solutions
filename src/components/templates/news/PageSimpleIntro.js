import React from "react"
import styled from "styled-components"
import { H3Blue, standardWrapper } from "../../../styles/helpers"

const PageSimpleIntro = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <h2 dangerouslySetInnerHTML={{ __html: data.pageSimpleIntroContent }} />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin: 7.5rem auto;
  }

  .wrapper {
    ${standardWrapper}
  }

  h2 {
    ${H3Blue};
  }
`

export default PageSimpleIntro
