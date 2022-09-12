import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1OffBlack,
  H3Green,
  standardWrapper,
  colors,
  H3LightGreen,
} from "../../../styles/helpers"
import SpinnerAnimation from "../../Animations/SpinnerAnimation"

const getData = graphql`
  {
    posts: allWpPost {
      edges {
        node {
          post {
            articleExcerpt
            featuredImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
          title
          id
          date
          slug
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }

    category: allWpCategory {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
  }
`

const Posts = () => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  const categories = postsData.category.edges

  const DISPLAY_NUMBER = 6
  const [activeCat, setActiveCat] = useState("all")

  const setNewActiveCat = cat => {
    setActiveCat(cat)
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        catChange: false,
      }
    })
  }

  const [postsStore, setPostsStoreStore] = useState({
    max: 0,
    current: 0,
    catPosts: [],
    display: [],
    loading: false,
    catChange: false,
  })

  useEffect(() => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        max: posts?.length,
        current: DISPLAY_NUMBER,
        catPosts: posts.filter(post => {
          if (
            activeCat !== "all" &&
            activeCat !== post.node.categories.nodes[0].slug
          ) {
            return false
          } else {
            return true
          }
        }),
        display: posts.slice(0, DISPLAY_NUMBER),
        more: posts?.length > DISPLAY_NUMBER,
      }
    })
  }, [activeCat])

  const getMorePosts = () => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: prevState.catPosts.slice(
          0,
          prevState.current + DISPLAY_NUMBER
        ),
        more: prevState.max > prevState.current + DISPLAY_NUMBER,
        loading: false,
      }
    })
  }

  const loadMorePostsHandler = () => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        loading: true,
      }
    })

    setTimeout(() => {
      getMorePosts()
    }, 2000)
  }

  useEffect(() => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        max: prevState.catPosts.length,
        display: prevState.catPosts.slice(0, DISPLAY_NUMBER),
        more: prevState.catPosts.length > DISPLAY_NUMBER,
      }
    })
  }, [postsStore.catPosts])

  const loadSetActiveCat = cat => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        catChange: true,
      }
    })

    setTimeout(() => {
      setNewActiveCat(cat)
    }, 2000)
  }

  return (
    <StyledSection>
      <div className="wrapper">
        <CatNav>
          <ul>
            <li>
              <button
                className={"all" === activeCat ? "activeCat" : ""}
                onClick={() => {
                  loadSetActiveCat("all")
                }}
              >
                All
                <span>&#124;</span>
              </button>
            </li>
            {categories.map(cat => {
              return (
                <li key={cat.node.id}>
                  <button
                    className={cat.node.slug === activeCat ? "activeCat" : ""}
                    onClick={() => {
                      loadSetActiveCat(cat.node.slug)
                    }}
                  >
                    {cat.node.name}
                    <span className="pipe">&#124;</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </CatNav>
        {postsStore.display.length > 0 &&
          postsStore.display.map(post => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            const postDate = new Date(post.node.date).toLocaleDateString(
              undefined,
              options
            )

            if (
              activeCat !== "all" &&
              activeCat !== post.node.categories.nodes[0].slug
            )
              return null

            const imageDisplay = getImage(
              post.node.post.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.post.featuredImage.altText
            return (
              <PostCard key={post.node.id}>
                <Link to={`/insights/${post.node.slug}`}>
                  <div className="post-image">
                    <div className="post-image__wrap">
                      <GatsbyImage
                        image={imageDisplay}
                        alt={imageAlt}
                        layout="fullWidth"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-content__title">
                      <h2>{post.node.title}</h2>
                    </div>
                    <div
                      className="post-content__excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.post.articleExcerpt,
                      }}
                    />
                    <div className="post-content__button">
                      <button type="button">Read More</button>
                    </div>
                  </div>
                  <div className="post-content__bottom">
                    <div className="post-content__date">
                      <p>{postDate}</p>
                      <span>&#124;</span>{" "}
                      <p>
                        {post.node.categories.nodes.map((catName, index) => {
                          const spaceReq =
                            post.node.categories.nodes.length > index + 1
                          return (
                            <span key={index}>
                              {catName.name}
                              {spaceReq && " | "}
                            </span>
                          )
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </PostCard>
            )
          })}
        <div className="moreLink">
          <button
            disabled={!postsStore.more}
            onClick={loadMorePostsHandler}
            type="button"
          >
            {postsStore.more
              ? `LOAD MORE ${activeCat === "all" ? "" : activeCat} POSTS`
              : `NO MORE ${activeCat === "all" ? "" : activeCat} POSTS`}
          </button>
        </div>
      </div>
      {postsStore.loading && (
        <LoadingModal>
          <div className="innerLoading">
            <div className="innerLoading__spinner">
              <SpinnerAnimation />
            </div>
            <p>Loading more {activeCat === "all" ? "" : activeCat} posts</p>
          </div>
        </LoadingModal>
      )}

      {postsStore.catChange && (
        <LoadingModal>
          <div className="innerLoading">
            <div className="innerLoading__spinner">
              <SpinnerAnimation />
            </div>
            <p>Loading Category</p>
          </div>
        </LoadingModal>
      )}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;
  }

  .moreLink {
    width: 100%;
    text-align: center;

    button {
      ${B1OffBlack};
      padding: 1rem 2rem;
      background: ${colors.white};
      border: 0.1rem solid ${colors.black};
      transition: all 0.3s ease-out;
      cursor: pointer;

      &:hover {
        color: ${colors.white};
        background: ${colors.colorSecondary};
        border-color: ${colors.colorSecondary};
      }

      &:disabled {
        opacity: 0.5;
        color: ${colors.black};
        background: ${colors.white};
        border-color: ${colors.black};
        cursor: not-allowed;
      }
    }
  }
`

const PostCard = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
  border: solid 1px #707070;
  box-shadow: 2px 7px 12px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 2rem 1rem;
  }

  .post-image {
    position: relative;
    width: 100%;
    height: 25vw;
    z-index: 100;

    @media (min-width: 768px) {
      height: 35rem;
    }

    @media (min-width: 1025px) {
      height: 40rem;
    }

    &__wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100%);
        height: 100%;

        img {
          width: 100% !important;
        }
      }
    }
  }

  .post-content {
    position: relative;
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      padding: 2rem 5rem;
      padding-bottom: 10rem;
    }

    &__bottom {
      width: 100%;
      padding: 2rem;

      @media (min-width: 768px) {
        position: absolute;
        right: 5rem;
        bottom: 1.5rem;
        left: 5rem;
        padding: 0;
      }
    }

    &__title {
      margin-bottom: 2.2rem;

      h2 {
        ${H3Green};
        margin: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-weight: normal;
      }
    }

    &__excerpt {
      p {
        ${B1OffBlack};

        &:last-of-type {
          margin-bottom: 1rem;
        }
      }
    }

    &__date {
      display: flex;

      p {
        ${B1OffBlack};
      }

      span {
        ${B1OffBlack};
        padding: 0 0.1rem 0 1rem;
      }
    }

    &__button {
      button {
        ${B1OffBlack};
        border: none;
        background-color: transparent;
        text-transform: uppercase;
      }
    }
  }
`

const CatNav = styled.div`
  width: 100%;
  padding: 4rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 100%;
      margin: 1rem auto;

      @media (min-width: 768px) {
        width: auto;
        margin: 0 0.5rem;
      }

      button {
        ${H3LightGreen};
        width: 100%;
        background-color: transparent;
        border: none;
        font-weight: 300;
        transition: all 0.3s ease;
        text-transform: uppercase;
        cursor: pointer;

        @media (min-width: 768px) {
          width: auto;
        }

        &:focus {
          box-shadow: none;
          color: ${colors.colorPrimary};
        }

        &:hover {
          color: ${colors.colorPrimary};
        }

        &.activeCat {
          color: ${colors.colorPrimary};
          font-weight: 700;
        }

        span {
          display: none;

          @media (min-width: 768px) {
            display: inline-block;
            margin-left: 1rem;
          }
        }
      }
    }
  }
`

const LoadingModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 66, 144, 0.7);
  z-index: 999999;

  .innerLoading {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    background-color: ${colors.white};
    width: 40rem;
    margin: 0 auto;
    padding: 5rem 2rem;
    text-align: center;

    p {
      margin: 0;
    }

    &__spinner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      width: 100%;
      height: 3.5rem;
      margin: 0 auto;
    }
  }
`

export default Posts
