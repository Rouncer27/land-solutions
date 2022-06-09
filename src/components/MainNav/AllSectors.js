import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

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
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.allSectors.acfOptionsMainMenu.mainMenu
  const hasSub = navData.allSectorsSubOne && navData.allSectorsSubOne.length > 0
  const hasSubOne =
    navData.allSectorsSubOne && navData.allSectorsSubOne.length > 0
      ? navData.allSectorsSubOne
      : null
  const hasSubTwo =
    navData.allSectorsSubTwo && navData.allSectorsSubTwo.length > 0
      ? navData.allSectorsSubTwo
      : null
  const hasSubThree =
    navData.allSectorsSubThree && navData.allSectorsSubThree.length > 0
      ? navData.allSectorsSubThree
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
        hasTopPage={navData.allSectorsTopPage}
        hasSub={hasSub}
        slug={navData.allSectorsTopPage ? navData.allSectorsTopPage.slug : null}
        title={navData.allSectorsTopPageTitle}
      />
      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="All Sectors"
          subIcon={navData.allSectorsTopPageIcon}
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

export default AllSectors
