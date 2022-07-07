import React from "react"
import styled from "styled-components"

import bgImg from "../../../images/header-triangles.png"
import { colors } from "../../../styles/helpers"

import Lines from "./Lines"

const Connections = () => {
  return (
    <StyledDiv>
      <div className="background-lines">
        <Lines />
      </div>
      <div className="background-image" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  background-color: ${colors.colorPrimary};
  overflow: hidden;
  height: 60vw;

  .background-lines {
    position: absolute;
    bottom: -110px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-size: 100% 100%;
    z-index: 5;
  }
`

export default Connections
