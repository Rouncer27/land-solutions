import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    insights: wp {
      acfOptionsMainMenu {
        mainMenu {
          insightsTopPage {
            ... on WpPage {
              slug
            }
          }
          insightsTopPageTitle
          insightsTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          insightsSubOne {
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

          insightsSubTwo {
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

          insightsSubThree {
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

const Insights = () => {
  const data = useStaticQuery(getData)
  const navData = data.insights.acfOptionsMainMenu.mainMenu
  console.log("navData: ", navData)
  return (
    <li>
      {navData.insightsTopPage ? (
        <Link to={`/${navData.insightsTopPage.slug}`}>
          {navData.insightsTopPageTitle}
        </Link>
      ) : (
        <>{navData.insightsTopPageTitle}</>
      )}
      {navData.insightsSubOne && navData.insightsSubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>Insights</p>
          </div>
          <div>
            <ul>
              {navData.insightsSubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.insightsSubTwo && navData.insightsSubTwo.length > 0 && (
            <div>
              <ul>
                {navData.insightsSubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.insightsSubThree && navData.insightsSubThree.length > 0 && (
            <div>
              <ul>
                {navData.insightsSubThree.map(item => {
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

export default Insights
