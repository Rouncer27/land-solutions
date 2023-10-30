import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageComponentGroups from "../components/templates/defaultTwo/PageComponentGroups"

const defaultTwo = props => {
  const seoInfo = props.data.seoInfo
  const components = props.data.components
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
      <div>
        <PageComponentGroups components={components} />
      </div>
    </Layout>
  )
}

export const defaultTwoTempQuery = graphql`
  query defaultTempTwoPage($id: String!) {
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

    components: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_DefaultTwo {
          templateName
          defaultTwo {
            pageComponents {
              ... on WpTemplate_DefaultTwo_Defaulttwo_PageComponents_PageIntroOne {
                fieldGroupName
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

              ... on WpTemplate_DefaultTwo_Defaulttwo_PageComponents_PageContentOne {
                fieldGroupName
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

              ... on WpTemplate_DefaultTwo_Defaulttwo_PageComponents_PageContentTwo {
                fieldGroupName
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

              ... on WpTemplate_DefaultTwo_Defaulttwo_PageComponents_PageContentThree {
                fieldGroupName
                simpleWysiwygContentTitle
                simpleWysiwygContentWysiwyg
              }
            }
          }
        }
      }
    }
  }
`

export default defaultTwo
