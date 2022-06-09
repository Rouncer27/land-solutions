import React from "react"
import { Link } from "gatsby"

const TopLink = ({ hasTopPage, hasSub, slug, title }) => {
  const topLink = hasTopPage ? (
    <Link to={`/${slug}`}>
      {title}
      {hasSub && <span>&#8249;</span>}
    </Link>
  ) : (
    <>
      {title}
      {hasSub && <span>&#8249;</span>}
    </>
  )

  return <>{topLink}</>
}

export default TopLink
