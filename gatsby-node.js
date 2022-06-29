const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              template {
                templateName
              }
              slug
              databaseId
              uri
              id
            }
          }
        }

        sectors: allWpSector {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        leadershipTeam: allWpLeadershipTeam {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        posts: allWpPost {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template.templateName === "About") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Home") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Contact") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "News") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/news.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Our Team") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/ourTeam.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Leadership Team") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/leadershipTeam.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Advisory Board") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/advisoryBoard.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Our Difference") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/ourDifference.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Our Responsibility") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/ourResponsibility.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Project Management") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/projectManagement.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Talent Sourcing") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/talentSourcing.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Stakeholder Engagement") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/stakeholderEngagement.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Indigenous Engagement") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/indigenousEngagement.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Gis Mapping") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/gisMapping.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Asset Management") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/assetManagement.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Environmental") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/environmental.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Careers") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/careers.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Opportunities") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/opportunities.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/default.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    const sectors = data.sectors.edges
    sectors.forEach(({ node }, index) => {
      createPage({
        path: `/sectors/${node.slug}/`,
        component: path.resolve("./src/templates/sector.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : sectors[index - 1].node.slug,
          prev:
            index === sectors.length - 1 ? null : sectors[index + 1].node.slug,
        },
      })
    })

    const leadershipTeam = data.leadershipTeam.edges
    leadershipTeam.forEach(({ node }, index) => {
      createPage({
        path: `/about/leadership-team/${node.slug}/`,
        component: path.resolve("./src/templates/singleLeader.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : leadershipTeam[index - 1].node.slug,
          prev:
            index === leadershipTeam.length - 1
              ? null
              : leadershipTeam[index + 1].node.slug,
        },
      })
    })

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/insights/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : posts[index - 1].node.slug,
          prev: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
