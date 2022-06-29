import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/post/Hero"
import PostTitle from "../components/templates/post/PostTitle"
import MainContent from "../components/templates/post/MainContent"
import PostNav from "../components/templates/post/PostNav"

const Post = props => {
  const { post, seoInfo } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={post.post.featuredImage} />
      <PostTitle title={post.title} excerpt={post.post.articleExcerpt} />
      <MainContent wysiwyg={post.post.mainContent} date={post.date} />
      <PostNav data={{ prev: prevPost, next: nextPost }} />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wpPost(slug: { eq: $slug }) {
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

    post: wpPost(slug: { eq: $slug }) {
      post {
        mainContent
        articleExcerpt
        featuredImage {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
      }
      title
      id
      date
      slug
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export default Post
