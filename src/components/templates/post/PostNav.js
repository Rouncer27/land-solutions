import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Green, Btn1One, medWrapper } from "../../../styles/helpers"

import arrow from "../../../images/arrow.png"

const PostNav = ({ data }) => {
  return (
    <PostNavStyled>
      <div className="wrapper">
        <nav>
          {data.prev ? (
            <Link to={`/insights/${data.prev}`}>
              <span>&lt; </span>
              Previous Article
            </Link>
          ) : (
            <button disabled type="button">
              {" "}
              <span>&lt; </span>
              Previous Article
            </button>
          )}

          <Link className="btn-back" to="/insights">
            Insights Page
          </Link>
          {data.next ? (
            <Link to={`/insights/${data.next}`}>
              Next Article
              <span>&gt; </span>
            </Link>
          ) : (
            <button disabled type="button">
              {" "}
              Next Article
              <span>&gt; </span>
            </button>
          )}
        </nav>
      </div>
    </PostNavStyled>
  )
}

const PostNavStyled = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .wrapper {
    ${medWrapper};

    max-width: 95rem !important;
  }

  nav {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a,
    button {
      ${B1Green};
      border: none;
      background: none;
      color: #9db594;
      font-weight: bold;
      text-transform: uppercase;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    a.btn-back {
      ${Btn1One};
    }
  }
`

export default PostNav
