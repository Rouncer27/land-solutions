import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileSubMenuItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")
  return (
    <MobileSubMenuItemStyled>
      <Link to={`/${slug}`}>{item.label}</Link>
    </MobileSubMenuItemStyled>
  )
}

const MobileSubMenuItemStyled = styled.li`
  width: 100%;
  text-align: left;

  a {
    padding: 1rem 2rem !important;
    text-transform: uppercase;
  }
`

export default MobileSubMenuItem
