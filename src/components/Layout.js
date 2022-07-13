import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { LoadingContext } from "../context/LoadingContext"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

import Header from "./Header"
import Footer from "./Footer"
import InitalLoad from "./InitalLoad/InitalLoad"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [loadingState, loadingDispatch] = useContext(LoadingContext)

  console.log("loadingState", loadingState)
  console.log("loadingDispatch", loadingDispatch)

  useEffect(() => {
    const alreadyClickClose = localStorage.getItem("initLoad")
    if (alreadyClickClose) {
      loadingDispatch({
        type: "INIT_LOAD_DONE",
      })
    } else {
      localStorage.setItem("initLoad", true)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loadingState.initLoad ? (
          <InitalLoad />
        ) : (
          <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
