import React from "react"
import { Link } from "gatsby"

const SubTwo = ({ subMenuTwo }) => {
  return (
    <div className="sub-menu__two sub-menu__wrap">
      <ul>
        {subMenuTwo.map(item => {
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

export default SubTwo
