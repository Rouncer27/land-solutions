window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}

// global function so that it can be called from anywhere
// Updates consent for GA4 to granted if called
window.consentGranted = function () {
  console.log("consent granted")
  gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
  })
}

// Returns value of a cookie named 'cookie-consent'
// Should be either "granted" or "denied"
window.getCookieConsent = function () {
  try {
    const consent = document.cookie.match(/cookie-consent=([^;]+)/)[1]
    return consent
  } catch (error) {
    return "unk"
  }
}

if (window.getCookieConsent() == "granted") {
  // If cookies already approved, set that
  console.log("default set to granted")
  gtag("consent", "default", {
    ad_storage: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
  })
} else {
  // default all to 'denied'.
  console.log("default set to denied")
  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "denied",
  })
}
