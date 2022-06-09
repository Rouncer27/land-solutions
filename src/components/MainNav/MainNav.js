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
        <ul className="nav-left">
          <OurStory />
          <AllSectors />
          <OurAdvantage />
          <Contact />
        </ul>
        <ul className="nav-right">
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

  .nav-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul {
    display: flex;
  }

  .nav-left {
    width: 75%;
  }

  .nav-right {
    width: 25%;
    justify-content: flex-end;
  }
`

export default MainNav
