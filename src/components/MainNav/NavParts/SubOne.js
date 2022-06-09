import React from "react"
import { Link } from "gatsby"

const SubOne = ({ subMenuOne }) => {
  return (
    <div className="sub-menu__one sub-menu__wrap">
      <ul>
        {subMenuOne.map(item => {
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

export default SubOne
