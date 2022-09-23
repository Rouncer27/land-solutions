import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import SimpleWysiwyg from "../components/templates/default/SimpleWysiwyg"

const DefaultPage = props => {
  const seoInfo = props.data.seoInfo
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
      <SimpleWysiwyg
        data={props.data.simpleWysiwyg.template.pageTemplateDefault}
      />
    </Layout>
  )
}

export const defaultTempQuery = graphql`
  query defaultTempPage($id: String!) {
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

    simpleWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpDefaultTemplate {
          pageTemplateDefault {
            simpleWysiwygContentTitle
            simpleWysiwygContentWysiwyg
          }
        }
      }
    }
  }
`

export default DefaultPage
