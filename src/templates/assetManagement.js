import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import Sections from "../components/templates/assetManagement/Sections"

import styled from "styled-components"
import { Btn1One, H2Blue, medWrapper } from "../styles/helpers"

const AssetManagement = props => {
  const seoInfo = props.data.seoInfo
  const pageIntro = props.data.pageIntro.template.pageAssetManagement
  const sectionsTabs =
    props.data.sections.template.pageAssetManagement.tabsContent

  const emailBtnReq =
    props.data.emailButton.template.pageAssetManagement.emailButtonRequired

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
      {!!emailBtnReq && (
        <StyledButton>
          <div className="wrapper">
            <h2>Get Started</h2>
            <div className="btn-sec">
              <a
                href={`mailto: ${props.data.emailButton.template.pageAssetManagement.emailButtonEmail}?subject=${props.data.emailButton.template.pageAssetManagement.emailButtonText}`}
              >
                {
                  props.data.emailButton.template.pageAssetManagement
                    .emailButtonText
                }
              </a>
            </div>
          </div>
        </StyledButton>
      )}
      <Sections data={sectionsTabs} location={props.location} />
    </Layout>
  )
}

const StyledButton = styled.div`
  width: 100%;

  .wrapper {
    ${medWrapper};
    text-align: center;
  }

  h2 {
    ${H2Blue};
    width: 100%;
  }

  .btn-sec {
    width: 100%;
  }

  a {
    ${Btn1One};
    margin-left: 7.5rem;
  }
`

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

    emailButton: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AssetManagement {
          pageAssetManagement {
            emailButtonRequired
            emailButtonText
            emailButtonEmail
          }
        }
      }
    }

    sections: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AssetManagement {
          pageAssetManagement {
            tabsContentDisplay
            tabsContent {
              tabId
              tabTitle
              displayThisTab
              sections {
                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_Wysiwyg {
                  content
                  fieldGroupName
                  subTitle
                  title
                  display
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_BoxLists {
                  fieldGroupName
                  display
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
                  display
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
                  display
                  buttonType
                  buttonText
                  buttonSlug
                  buttonEmail
                  buttonExternal
                  content
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_WysiwygLightTitles {
                  fieldGroupName
                  display
                  subTitle
                  title
                  wysiwyg
                }

                ... on WpTemplate_AssetManagement_Pageassetmanagement_tabsContent_Sections_IconsRows {
                  fieldGroupName
                  display
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
                  display
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
