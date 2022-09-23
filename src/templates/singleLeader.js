import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TopTitle from "../components/templates/singleLeader/TopTitle"
import LeaderContent from "../components/templates/singleLeader/LeaderContent"

const singleLeader = props => {
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
      <TopTitle />
      <LeaderContent
        data={props.data.leader}
        next={props.pageContext.next}
        prev={props.pageContext.prev}
      />
    </Layout>
  )
}

export const query = graphql`
  query singleLeaderQuery($slug: String!) {
    seoInfo: wpLeadershipTeam(slug: { eq: $slug }) {
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

    leader: wpLeadershipTeam(slug: { eq: $slug }) {
      postLeadershipTeam {
        lastName
        jobTitle
        firstName
        bioContent
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
      date
      title
      slug
      id
    }
  }
`

export default singleLeader
