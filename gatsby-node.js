const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) =>
  graphql(`{
    allDatoCmsWork {
      edges {
        node {
          slug
        }
      }
    }
  }`)
  .then(result =>
    result.data.allDatoCmsWork.edges.forEach(({ node: work }) => {
      const { slug } = work
      createPage({
          path: `works/${slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: { slug },
      })
    })
  )
