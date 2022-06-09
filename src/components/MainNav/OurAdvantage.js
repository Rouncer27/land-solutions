import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    ourAdvantage: wp {
      acfOptionsMainMenu {
        mainMenu {
          ourAdvantageTopPage {
            ... on WpPage {
              slug
            }
          }
          ourAdvantageTopPageTitle
          ourAdvantageTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          ourAdvantageSubOne {
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

          ourAdvantageSubTwo {
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

          ourAdvantageSubThree {
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

const OurAdvantage = () => {
  const data = useStaticQuery(getData)
  const navData = data.ourAdvantage.acfOptionsMainMenu.mainMenu
  return (
    <li>
      {navData.ourAdvantageTopPage ? (
        <Link to={`/${navData.ourAdvantageTopPage.slug}`}>
          {navData.ourAdvantageTopPageTitle}
        </Link>
      ) : (
        <>{navData.ourAdvantageTopPageTitle}</>
      )}
      {navData.ourAdvantageSubOne && navData.ourAdvantageSubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>Our Advantage</p>
          </div>
          <div>
            <ul>
              {navData.ourAdvantageSubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.ourAdvantageSubTwo && navData.ourAdvantageSubTwo.length > 0 && (
            <div>
              <ul>
                {navData.ourAdvantageSubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.ourAdvantageSubThree &&
            navData.ourAdvantageSubThree.length > 0 && (
              <div>
                <ul>
                  {navData.ourAdvantageSubThree.map(item => {
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

export default OurAdvantage
