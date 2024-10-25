import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql, Script } from "gatsby"
import { LoadingContext } from "../context/LoadingContext"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

import Header from "./Header"
import HeaderInit from "./HeaderInit"
import Seo from "./Seo"
import Footer from "./Footer"
import CookieConsent from "./Cookies/CookieConsent"
import InitalLoad from "./InitalLoad/InitalLoad"

const Layout = ({ title, description, metaImg, location, children }) => {
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3VBE7MLB82"
      />
      <Script src="/scripts/ga.js" />
      <Script src="/scripts/consent.js" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loadingState.initLoad && location === "/" ? (
          <>
            <Seo
              title={title}
              description={description}
              //metaImg={metaImg}
              location={location}
            />
            <HeaderInit siteTitle={data.site.siteMetadata?.title || `Title`} />
            <InitalLoad />
          </>
        ) : (
          <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>
            <CookieConsent />
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
