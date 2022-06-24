import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../../styles/helpers"

const PageVideo = ({ data }) => {
  return (
    <StuledDiv>
      <div className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.pageVideo }} />
      </div>
    </StuledDiv>
  )
}

const StuledDiv = styled.div`
  .wrapper {
    ${standardWrapper};
  }
`

export default PageVideo
