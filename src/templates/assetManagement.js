import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import Sections from "../components/templates/assetManagement/Sections"

const AssetManagement = props => {
  const seoInfo = props.data.seoInfo
  const pageIntro = props.data.pageIntro.template.pageAssetManagement
  const sectionsTabs =
    props.data.sections.template.pageAssetManagement.tabsContent

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
      <PageIntro data={pageIntro} />
      <Sections data={sectionsTabs} location={props.location} />
    </Layout>
  )
}

export const assetManagementTempQuery = graphql`
  query assetManagementTempPage($id: String!) {
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
        ... on WpTemplate_AssetManagement {
          pageAssetManagement {
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

    sections: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AssetManagement {
          pageAssetManagement {
            tabsContent {
              tabId
              tabTitle
              sections {
                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_Wysiwyg {
                  content
                  fieldGroupName
                  subTitle
                  title
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_BoxLists {
                  fieldGroupName
                  boxLists {
                    listItems {
                      item
                    }
                    title
                  }
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_ImageWysiwyg {
                  content
                  title
                  fieldGroupName
                  image {
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

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_BoxLink {
                  fieldGroupName
                  buttonSlug
                  buttonText
                  content
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_WysiwygLightTitles {
                  fieldGroupName
                  subTitle
                  title
                  wysiwyg
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_IconsRows {
                  fieldGroupName
                  iconsRows {
                    content
                    title
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

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_PageHero {
                  buttonSlug
                  buttonText
                  image {
                    altText
                    sourceUrl
                    localFile {
                      url
                      childImageSharp {
                        gatsbyImageData(width: 1000)
                      }
                    }
                  }
                  content
                  fieldGroupName
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AssetManagement
