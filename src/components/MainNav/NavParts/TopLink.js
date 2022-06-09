import React from "react"
import { Link } from "gatsby"

const TopLink = ({ hasTopPage, hasSub, slug, title }) => {
  const topLink = hasTopPage ? (
    <Link to={`/${slug}`}>
      <span className="item-span-wrap">
        <span>{title}</span>
        {hasSub && <span className="sub-indicator">&#8249;</span>}
      </span>
    </Link>
  ) : (
    <span className="item-span-wrap">
      <span>{title}</span>
      {hasSub && <span className="sub-indicator">&#8249;</span>}
    </span>
  )

  return <>{topLink}</>
}

export default TopLink
