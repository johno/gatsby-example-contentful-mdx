exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      posts: allContentfulPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post'),
      context: {
        id: post.id
      }
    })
  })
}
