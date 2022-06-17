import React from "react"
import styled from "styled-components"

import icon from "../../../images/icon.png"
import waves from "../../../images/waves.png"

const IconGraphic = () => {
  return (
    <StyledDiv>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="wave-bg" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;

  .icon {
    position: relative;
    width: 100%;
    max-width: 31.5rem;
    margin: 0rem auto 2rem;
    z-index: 100;
  }

  .wave-bg {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 0;
    width: 100%;
    background-image: url(${waves});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`

export default IconGraphic
