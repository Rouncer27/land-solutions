import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    allSectors: wp {
      acfOptionsMainMenu {
        mainMenu {
          allSectorsTopPage {
            ... on WpPage {
              slug
            }
          }
          allSectorsTopPageTitle
          allSectorsTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          allSectorsSubOne {
            page {
              ... on WpSector {
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
                ... on WpSector {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          allSectorsSubTwo {
            page {
              ... on WpSector {
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
                ... on WpSector {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          allSectorsSubThree {
            page {
              ... on WpSector {
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
                ... on WpSector {
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

const AllSectors = () => {
  const data = useStaticQuery(getData)
  const navData = data.allSectors.acfOptionsMainMenu.mainMenu
  return (
    <li>
      <Link to={`/${navData.allSectorsTopPage.slug}`}>
        {navData.allSectorsTopPageTitle}
      </Link>
      {navData.allSectorsSubOne && navData.allSectorsSubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>All Sectors</p>
          </div>
          <div>
            <ul>
              {navData.allSectorsSubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.allSectorsSubTwo && navData.allSectorsSubTwo.length > 0 && (
            <div>
              <ul>
                {navData.allSectorsSubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.allSectorsSubThree && navData.allSectorsSubThree.length > 0 && (
            <div>
              <ul>
                {navData.allSectorsSubThree.map(item => {
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

export default AllSectors
