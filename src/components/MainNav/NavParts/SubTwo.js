import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SubTwo = ({ subMenuTwo }) => {
  return (
    <div className="sub-menu__two sub-menu__wrap">
      <ul>
        {subMenuTwo.map(item => {
          if (item?.page === null) return null

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
                <span className="sub-menu__title--text">{item.page.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubTwo
