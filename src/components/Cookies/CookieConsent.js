import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { B1White, Btn1One, colors } from "../../styles/helpers"

const CookieConsentStyled = styled.div`
  .cookie-banner-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;

    &.hidden {
      display: none;
    }

    .cookie-banner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${colors.colorPrimary};
      opacity: 0.75;
      z-index: 1;
    }
  }

  .cookie-banner-container {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 65rem;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background-color: ${colors.colorTertiary};
    border-radius: 0.5rem;
    text-align: center;
    z-index: 100000000;

    p {
      ${B1White};
      color: #fff;
    }

    a {
      ${B1White};
      color: #fff;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }

    button {
      ${Btn1One};

      &:nth-of-type(2) {
        margin-left: 1rem;
      }
    }
  }
`

const CookieConsent = () => {
  const [cookies, setCookies] = useState("unk")
  const [isMounted, setIsMounted] = useState(false)
  const [isFunctionsLoaded, setIsFunctionsLoaded] = useState(false)

  const isBrowser = typeof window !== "undefined"

  const handleAccept = () => {
    if (!isBrowser) {
      return
    }
    setCookies("granted")
    // // accepted cookie lasts for a year
    let d = new Date()
    let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate())
    document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/"
    window.consentGranted()
  }

  const handleDecline = () => {
    if (!isBrowser) {
      return
    }
    setCookies("denied")
    // declined cookie only lasts for the session
    document.cookie = "cookie-consent=denied; path=/"
  }

  const checkForFuctions = () => {
    setIsFunctionsLoaded(
      typeof window.getCookieConsent !== "undefined" ? true : false,
    )
  }

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    setTimeout(() => {
      checkForFuctions()
    }, 1000)
    // get cookie approval after component is mounted
    if (isFunctionsLoaded) {
      setIsMounted(true)
      setCookies(window.getCookieConsent())
    }
  }, [isFunctionsLoaded])

  const banner = isMounted ? (
    <CookieConsentStyled>
      <div
        className={`${
          cookies === "granted" || cookies === "denied" ? "hidden" : ""
        } cookie-banner-wrapper`}
      >
        <div id="cookie-banner" className={`cookie-banner-container`}>
          <div>
            <p>
              We use cookies to make your experience even better and to analyze
              our website traffic. By clicking "Accept", you consent to our use
              of cookies. To learn more, see our{" "}
              <a href="/privacy-policy">Privacy Policy.</a>
            </p>

            <div className="">
              <button type="button" onClick={handleAccept}>
                Accept
              </button>
              <button type="button" onClick={handleDecline}>
                Decline
              </button>
            </div>
          </div>
        </div>
        <div className="cookie-banner-overlay"></div>
      </div>
    </CookieConsentStyled>
  ) : null

  return banner
}

export default CookieConsent
