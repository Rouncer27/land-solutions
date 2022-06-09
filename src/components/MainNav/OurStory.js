import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    ourStory: wp {
      acfOptionsMainMenu {
        mainMenu {
          ourStoryTopPage {
            ... on WpPage {
              slug
            }
          }
          ourStoryTopPageTitle
          ourStoryTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          ourStorySubOne {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          ourStorySubTwo {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          ourStorySubThree {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`

const OurStory = () => {
  const data = useStaticQuery(getData)
  const navData = data.ourStory.acfOptionsMainMenu.mainMenu
  return (
    <li>
      <Link to={`/${navData.ourStoryTopPage.slug}`}>
        {navData.ourStoryTopPageTitle}
      </Link>
      {navData.ourStorySubOne && navData.ourStorySubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>Our Story</p>
          </div>
          <div>
            <ul>
              {navData.ourStorySubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.ourStorySubTwo && navData.ourStorySubTwo.length > 0 && (
            <div>
              <ul>
                {navData.ourStorySubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.ourStorySubThree && navData.ourStorySubThree.length > 0 && (
            <div>
              <ul>
                {navData.ourStorySubThree.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </li>
  )
}

export default OurStory
