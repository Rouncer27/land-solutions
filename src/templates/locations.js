import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import WysiwygIcon from "../components/templates/locations/WysiwygIconRepeater"
import LocationsDisplay from "../components/templates/locations/LocationsDisplay"

const Locations = props => {
  const hero = props?.data?.hero?.template?.pageLocations
  const wysiwygIcon =
    props?.data?.wysiwygIcon?.template?.pageLocations?.wysiwygWithIcon
  const locations = props?.data?.locations?.template?.pageLocations
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <WysiwygIcon data={wysiwygIcon} />
      <LocationsDisplay data={locations} />
    </Layout>
  )
}

export const locationsTempQuery = graphql`
  query locationsTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Locations {
          pageLocations {
            pageHeroIntroSubTitle
            pageHeroIntroTitle
            pageHeroIntroContent
            pageHeroIntroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }

    wysiwygIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Locations {
          pageLocations {
            wysiwygWithIcon {
              mainTitle
              subTitle
              wysiwyg
              icon {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }
        }
      }
    }

    locations: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Locations {
          pageLocations {
            locations {
              regionTitle
              address
              phone
              tollFree
              email
            }
          }
        }
      }
    }
  }
`

export default Locations
