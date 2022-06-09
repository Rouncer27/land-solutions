import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MainNav from "./MainNav/MainNav"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
    <MainNav />
  </header>
)

export default Header
