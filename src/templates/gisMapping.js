import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import WysiwygIcon from "../components/templates/shared/WysiwygIcon"
import PageHeroContained from "../components/templates/shared/PageHeroContained"
import TitleWysiwyg from "../components/templates/gisMapping/TitleWysiwyg"
import VideoSection from "../components/templates/shared/VideoSection"

const GisMapping = props => {
  const pageIntro = props.data.pageIntro.template.pageGisMapping
  const wysiwygIcon = props.data.wysiwygIcon.template.pageGisMapping
  const pageHeroContained = props.data.pageHeroContained.template.pageGisMapping
  const titleWysiwyg = props.data.titleWysiwyg.template.pageGisMapping
  const video = props.data.video.template.pageGisMapping

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
      <WysiwygIcon bgcolor={true} data={wysiwygIcon} />
      <PageHeroContained bgcolor={true} data={pageHeroContained} />
      <TitleWysiwyg data={titleWysiwyg} />
      <VideoSection data={video} />
    </Layout>
  )
}

export const gisMappingTempQuery = graphql`
  query gisMappingTempPage($id: String!) {
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

    pageIntro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_GisMapping {
          pageGisMapping {
            pageIntroMainTitle
            pageIntroSubTitle
            pageIntroBlueContent
            pageIntroContent
            pageIntroLinkText
            pageIntroLinkSlug
            pageIntroIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            pageIntroSideImage {
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

    wysiwygIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_GisMapping {
          pageGisMapping {
            wysiwygWithIconIcon {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            wysiwygWithIconTitle
            wysiwygWithIconSubTitle
            wysiwygWithIconWysiwyg
          }
        }
      }
    }

    pageHeroContained: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_GisMapping {
          pageGisMapping {
            pageHeroContainedImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
            pageHeroContainedContent
            pageHeroContainedButtonText
            pageHeroContainedSlug
          }
        }
      }
    }

    titleWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_GisMapping {
          pageGisMapping {
            titleBesideSimpleContentTitle
            titleBesideSimpleContentButtonText
            titleBesideSimpleContentUrl
            titleBesideSimpleContentWysiwyg
          }
        }
      }
    }

    video: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_GisMapping {
          pageGisMapping {
            pageVideoSection {
              altText
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
export default GisMapping
