import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

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
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.careers.acfOptionsMainMenu.mainMenu
  const hasSub = navData.careersSubOne && navData.careersSubOne.length > 0
  const hasSubOne =
    navData.careersSubOne && navData.careersSubOne.length > 0
      ? navData.careersSubOne
      : null
  const hasSubTwo =
    navData.careersSubTwo && navData.careersSubTwo.length > 0
      ? navData.careersSubTwo
      : null
  const hasSubThree =
    navData.careersSubThree && navData.careersSubThree.length > 0
      ? navData.careersSubThree
      : null
  const handleIsActiveOn = () => {
    setIsSubActive(true)
  }

  const handleIsActiveOff = () => {
    setIsSubActive(false)
  }
  return (
    <StyledListItem
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
      onFocus={handleIsActiveOn}
    >
      <TopLink
        hasTopPage={navData.careersTopPage}
        hasSub={hasSub}
        slug={navData.careersTopPage ? navData.careersTopPage.slug : null}
        title={navData.careersTopPageTitle}
      />
      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="Contact"
          subMenuOne={hasSubOne}
          subMenuTwo={hasSubTwo}
          subMenuThree={hasSubThree}
        />
      )}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  ${ListStyles};
`

export default Careers
