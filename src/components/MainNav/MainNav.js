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
    <nav>
      <ul>
        <AllSectors />
        <OurStory />
        <OurAdvantage />
        <Contact />
      </ul>
      <ul>
        <Insights />
        <Careers />
      </ul>
    </nav>
  )
}

export default MainNav
