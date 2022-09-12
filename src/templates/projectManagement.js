import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import PageHeroWysiwyg from "../components/templates/shared/PageHeroWysiwyg"
import WysiwygCircle from "../components/templates/projectManagement/WysiwygCircle"
import VideoSection from "../components/templates/shared/VideoSection"

const ProjectManagement = props => {
  const seoInfo = props.data.seoInfo
  const pageIntro = props.data.pageIntro.template.pageProjectManagement
  const pageHeroWysiwyg =
    props.data.pageHeroWysiwyg.template.pageProjectManagement
  const wysiwygCircle = props.data.wysiwygCircle.template.pageProjectManagement
  const video = props.data.video.template.pageProjectManagement

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
      <PageHeroWysiwyg data={pageHeroWysiwyg} />
      <WysiwygCircle data={wysiwygCircle} />
      <VideoSection data={video} />
    </Layout>
  )
}

export const projectManagementTempQuery = graphql`
  query projectManagementTempPage($id: String!) {
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
        ... on WpTemplate_ProjectManagement {
          pageProjectManagement {
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

    pageHeroWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_ProjectManagement {
          pageProjectManagement {
            pageHeroWithWysiwygTitle
            pageHeroWithWysiwygIntroContent
            pageHeroWithWysiwygWysiwyg
            pageHeroWithWysiwygBackgroundImage {
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

    wysiwygCircle: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_ProjectManagement {
          pageProjectManagement {
            pageWysiwygWithCircleImageTitle
            pageWysiwygWithCircleImageSubTitle
            pageWysiwygWithCircleImageWysiwyg
            pageWysiwygWithCircleImageButtonText
            pageWysiwygWithCircleImageButtonUrl
            pageWysiwygWithCircleImageImage {
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

    video: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_ProjectManagement {
          pageProjectManagement {
            pageVideoSection {
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

export default ProjectManagement
