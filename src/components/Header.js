import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default Header
