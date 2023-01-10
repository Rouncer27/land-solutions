import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import WysiwygIcon from "../components/templates/locations/WysiwygIconRepeater"
import LocationsDisplay from "../components/templates/locations/LocationsDisplay"

const Locations = props => {
  const seoInfo = props.data.seoInfo
  const hero = props?.data?.hero?.template?.pageLocations
  const wysiwygIcon =
    props?.data?.wysiwygIcon?.template?.pageLocations?.wysiwygWithIcon
  const locations = props?.data?.locations?.template?.pageLocations
  return (
    <Layout
      title={seoInfo.seoFields.swbThemeMetaTitle}
      description={seoInfo.seoFields.swbThemeDescription}
      //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
      location={props.location.pathname}
    >
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageHero data={hero} />
      <WysiwygIcon data={wysiwygIcon} />
      {/* <LocationsDisplay data={locations} /> */}
      <div>
        <iframe
          src="https://maps.landsolutions.ca/portal/apps/webappviewer/index.html?id=fa45f566442b4910a810b7ed4f9203c8"
          width="100%"
          height="790px"
          frameBorder="0"
        ></iframe>
      </div>
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
