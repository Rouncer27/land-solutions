import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import styled from "styled-components"
import {
  H1Blue,
  H2Green,
  H3SkyBlue,
  B1OffBlack,
  B2OffBlack,
} from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>IndexPage</h1>
      <Typograpgy>
        <h1>Aliquam tincidunt mauris eu risus.</h1>
        <h2>Aliquam tincidunt mauris eu risus.</h2>
        <h3>Aliquam tincidunt mauris eu risus.</h3>
        <p className="b1">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
        <p className="b2">
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
          vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
          vulputate vel, nisl.
        </p>
      </Typograpgy>
    </Layout>
  )
}

const Typograpgy = styled.div`
  h1 {
    ${H1Blue};
  }

  h2 {
    ${H2Green};
  }

  h3 {
    ${H3SkyBlue};
  }

  .b1 {
    ${B1OffBlack};
  }

  .b2 {
    ${B2OffBlack};
  }
`

export default IndexPage
