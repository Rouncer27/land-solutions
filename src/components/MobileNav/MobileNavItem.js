import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B2OffBlack, colors } from "../../styles/helpers"

import MobileSubMenu from "./MobileSubMenu"

const MobileNavItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")

  console.log("slug: ", slug === "our-advantage")

  const [subActive, setSubActive] = useState(false)

  const handleToggleActive = () => {
    setSubActive(!subActive)
  }
  return (
    <MobileNavItemStyled>
      {slug === "our-advantage" ? (
        <p>{item.label}</p>
      ) : (
        <Link to={`/${slug === "home" ? "" : slug}`}>{item.label}</Link>
      )}

      {item.subItems && item.subItems.length > 0 && (
        <SubMenuContainer issubactive={subActive} className="subContainer">
          <button
            className="sub-menu-control"
            onClick={() => {
              handleToggleActive()
            }}
          >
            {subActive ? <span>&#8963;</span> : <span>&#8964;</span>}
          </button>
          <MobileSubMenu subActive={subActive} items={item.subItems} />
        </SubMenuContainer>
      )}
    </MobileNavItemStyled>
  )
}

const MobileNavItemStyled = styled.li`
  position: relative;
  width: 100%;
  border-bottom: 0.1rem solid #707070;
  text-align: left;

  .subContainer {
    width: 100%;
    height: 100%;

    button {
      position: absolute;
      top: 10%;
      right: 0;
      width: 4rem;
      height: 6rem;
      font-size: 2.5rem;
      font-weight: bold;
      border-radius: 0 !important;
      border: none;
      background-color: transparent;
      transform: translateY(-50%);
      line-height: 1.25;
      z-index: 150;

      &:hover {
        cursor: pointer;
      }
    }
  }

  p {
    ${B2OffBlack};
    display: block;
    width: 100%;
    margin: 0;
    padding: 2rem;

    &[aria-current="page"] {
      color: ${colors.colorSecondary};
      background-color: ${colors.colorTertiary};
    }
  }

  a {
    ${B2OffBlack};
    display: block;
    width: 100%;
    padding: 2rem;

    &:hover {
      color: ${colors.colorPrimary};
    }

    &[aria-current="page"] {
      color: ${colors.colorSecondary};
      background-color: ${colors.colorTertiary};

      &:hover {
        cursor: default;
      }
    }
  }
`

const SubMenuContainer = styled.div`
  button.sub-menu-control {
    top: ${props => (props.issubactive ? "3rem" : "50%")};
  }
`

export default MobileNavItem
