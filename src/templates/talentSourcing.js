import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import PageVideo from "../components/templates/talentSourcing/PageVideo"
import ThreeColumns from "../components/templates/talentSourcing/ThreeColumns"
import ColorBGWysiwyg from "../components/templates/talentSourcing/ColorBGWysiwyg"
import IconWysiwygButton from "../components/templates/talentSourcing/IconWysiwygButton"

const TalentSourcing = props => {
  const pageIntro = props.data.pageIntro.template.pageTalentSourcing
  const pageVideo = props.data.pageVideo.template.pageTalentSourcing
  const threeColumns = props.data.threeColumns.template.pageTalentSourcing
  const colorBGWysiwyg = props.data.colorBGWysiwyg.template.pageTalentSourcing
  const iconWysiwygButton =
    props.data.iconWysiwygButton.template.pageTalentSourcing

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
      <PageVideo data={pageVideo} />
      <ThreeColumns data={threeColumns} />
      <ColorBGWysiwyg data={colorBGWysiwyg} />
      <IconWysiwygButton data={iconWysiwygButton} />
    </Layout>
  )
}

export const talentSourcingTempQuery = graphql`
  query talentSourcingTempPage($id: String!) {
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
        ... on WpTemplate_TalentSourcing {
          pageTalentSourcing {
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

    pageVideo: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_TalentSourcing {
          pageTalentSourcing {
            pageVideo
          }
        }
      }
    }

    threeColumns: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_TalentSourcing {
          pageTalentSourcing {
            threeColumnsWithImagesItems {
              content
              icon {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1500)
                  }
                }
              }
            }
            threeColumnsWithImagesTitle
          }
        }
      }
    }

    colorBGWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_TalentSourcing {
          pageTalentSourcing {
            colourBackgroundWysiwygWysiwyg
            colourBackgroundWysiwygImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }

    iconWysiwygButton: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_TalentSourcing {
          pageTalentSourcing {
            iconWithWysiwygWysiwyg
            iconWithWysiwygLinksTitle
            iconWithWysiwygButtonOneText
            iconWithWysiwygButtonOneSlug
            iconWithWysiwygButtonTwoText
            iconWithWysiwygButtonTwoSlug
            iconWithWysiwygIcon {
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
`

export default TalentSourcing
