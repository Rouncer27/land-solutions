import React from "react"
import { Link } from "gatsby"

const SubThree = ({ subMenuThree }) => {
  return (
    <div className="sub-menu__three sub-menu__wrap">
      <ul>
        {subMenuThree.map(item => {
          return (
            <li key={item.page.id}>
              <Link to={item.page.uri}>{item.page.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SubThree
