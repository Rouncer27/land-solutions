import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    careers: wp {
      acfOptionsMainMenu {
        mainMenu {
          careersTopPage {
            ... on WpPage {
              slug
            }
          }
          careersTopPageTitle
          careersTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          careersSubOne {
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

          careersSubTwo {
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

          careersSubThree {
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

const Careers = () => {
  const data = useStaticQuery(getData)
  const navData = data.careers.acfOptionsMainMenu.mainMenu
  console.log("navData: ", navData)
  return (
    <li>
      {navData.careersTopPage ? (
        <Link to={`/${navData.careersTopPage.slug}`}>
          {navData.careersTopPageTitle}
        </Link>
      ) : (
        <>{navData.careersTopPageTitle}</>
      )}
      {navData.careersSubOne && navData.careersSubOne.length > 0 && (
        <div className="sub-menu">
          <div>
            <p>Careers</p>
          </div>
          <div>
            <ul>
              {navData.careersSubOne.map(item => {
                return (
                  <li key={item.page.id}>
                    <Link to={item.page.uri}>{item.page.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {navData.careersSubTwo && navData.careersSubTwo.length > 0 && (
            <div>
              <ul>
                {navData.careersSubTwo.map(item => {
                  return (
                    <li key={item.page.id}>
                      <Link to={item.page.uri}>{item.page.title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {navData.careersSubThree && navData.careersSubThree.length > 0 && (
            <div>
              <ul>
                {navData.careersSubThree.map(item => {
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

export default Careers
