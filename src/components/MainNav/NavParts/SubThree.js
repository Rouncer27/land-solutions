import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SubThree = ({ subMenuThree }) => {
  return (
    <div className="sub-menu__three sub-menu__wrap">
      <ul>
        {subMenuThree.map(item => {
          const image = getImage(
            item?.icon?.localFile?.childImageSharp?.gatsbyImageData
          )
          const logoAlt = item?.icon?.altText
          return (
            <li className="sub-menu__item" key={item.page.id}>
              <Link to={item.page.uri}>
                <span className="sub-menu__item--icon">
                  <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
                </span>
                <span>{item.page.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubThree
