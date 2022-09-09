import React from "react"
import styled from "styled-components"

import AllSectors from "./AllSectors"
import OurStory from "./OurStory"
import OurAdvantage from "./OurAdvantage"
import Contact from "./Contact"
import Insights from "./Insights"
import Careers from "./Careers"

const MainNav = () => {
  return (
    <StyledNav>
      <div className="nav-wrap">
        <ul>
          <OurStory />
          <AllSectors />
          <OurAdvantage />
          <Contact />
          <Insights />
          <Careers />
        </ul>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: relative;
  width: 100%;

  @media (min-width: 1025px) {
    padding-left: 5rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export default MainNav
