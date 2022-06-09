import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    contact: wp {
      acfOptionsMainMenu {
        mainMenu {
          contactTopPage {
            ... on WpPage {
              slug
            }
          }
          contactTopPageTitle
          contactTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          contactSubOne {
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

          contactSubTwo {
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

          contactSubThree {
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

const Contact = () => {
  const data = useStaticQuery(getData)
  const navData = data.contact.acfOptionsMainMenu.mainMenu
  return (
    <li>
      {navData.contactTopPage ? (
        <Link to={`/${navData.contactTopPage.slug}`}>
          {navData.contactTopPageTitle}
        </Link>
      ) : (
        <>{navData.contactTopPageTitle}</>
      )}
      {navData.contactSubOne && navData.contactSubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>Contact</p>
          </div>
          <div>
            <ul>
              {navData.contactSubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.contactSubTwo && navData.contactSubTwo.length > 0 && (
            <div>
              <ul>
                {navData.contactSubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.contactSubThree && navData.contactSubThree.length > 0 && (
            <div>
              <ul>
                {navData.contactSubThree.map(item => {
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

export default Contact
