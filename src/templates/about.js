import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/about/Intro"
// import Highlights from "../components/templates/about/Highlights"
import HighlightsTwo from "../components/templates/about/HighlightsTwo"
import Locations from "../components/templates/about/Locations"

const About = props => {
  const seoInfo = props.data.seoInfo
  const intro = props.data.intro.template.aboutPage
  const highlights = props.data.highlights.template.aboutPage
  const locations = props.data.locations.template.aboutPage
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
      <Intro data={intro} />
      {/* <Highlights data={highlights} /> */}
      <HighlightsTwo data={highlights} />
      <Locations data={locations} />
    </Layout>
  )
}

export const aboutTempQuery = graphql`
  query aboutTempPage($id: String!) {
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

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutPage {
            aboutIntroTitle
            aboutIntroSubTitle
            aboutIntroBlueTitle
            aboutIntroBoldText
            aboutIntroContent
            aboutIntroIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 750)
                }
              }
            }
          }
        }
      }
    }

    highlights: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutPage {
            highlightsSliderTitle
            highlightsSliderSlides {
              year
              points {
                point
              }
            }
            highlightsSliderImage {
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

    locations: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutPage {
            locationsLinkTitle
            locationsLinkButtonText
            locationsLinkButtonSlug
            locationsLinkBackgroundImage {
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
  }
`

export default About
