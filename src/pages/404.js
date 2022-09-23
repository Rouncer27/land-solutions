import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import styled from "styled-components"
import { B1Black, Btn1One, H1Black, standardWrapper } from "../styles/helpers"
import { Link } from "gatsby"

const NotFoundPage = props => {
  return (
    <Layout
      title="404: Not found"
      description={`404: Not found`}
      location={props.location.pathname}
    >
      <Seo
        title="404: Not found"
        description={`404: Not found`}
        location={props.location.pathname}
      />
      <StyledSection>
        <div className="wrapper">
          <div className="titles">
            <h1>404: Not Found</h1>
          </div>
          <div className="content">
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
          <div className="link">
            <Link to="/">Home</Link>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  padding: 15rem 0;
  .wrapper {
    ${standardWrapper};
  }

  .titles {
    width: 100%;

    h1 {
      ${H1Black};
      text-align: center;
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Black};
      text-align: center;
    }
  }

  .link {
    width: 100%;
    text-align: center;

    a {
      ${Btn1One};
      text-align: center;
    }
  }
`

export default NotFoundPage
