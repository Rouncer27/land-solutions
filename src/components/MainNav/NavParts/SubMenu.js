import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SubOne from "./SubOne"
import SubTwo from "./SubTwo"
import SubThree from "./SubThree"
import { Link } from "gatsby"

const SubMenu = ({
  isActive,
  subTitle,
  subIcon,
  subMenuOne,
  subMenuTwo,
  subMenuThree,
  subTitleSlug,
}) => {
  const image = getImage(subIcon?.localFile?.childImageSharp?.gatsbyImageData)
  const logoAlt = subIcon?.altText
  return (
    <div className={`sub-menu${isActive ? " sub-menu__active" : ""}`}>
      <div className="sub-menu__title">
        <p>
          <span className="sub-menu__title--icon">
            <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
          </span>
          {subTitleSlug ? (
            <Link to={`/${subTitleSlug}`}>{subTitle}</Link>
          ) : (
            <span>{subTitle}</span>
          )}
        </p>
      </div>
      <SubOne subMenuOne={subMenuOne} />
      {subMenuTwo && <SubTwo subMenuTwo={subMenuTwo} />}
      {subMenuThree && <SubThree subMenuThree={subMenuThree} />}
    </div>
  )
}

export default SubMenu
