import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Home = props => {
  const seoInfo = props.data
  return (
    <Layout>
      <Seo />
      <h1>home</h1>
    </Layout>
  )
}

export default Home
