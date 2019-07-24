import React from 'react'
import { graphql } from 'gatsby'

import Posts from '../components/posts'

export default ({ data: { posts } }) => <Posts posts={posts.nodes} />

export const pageQuery = graphql`
  query{
    posts: allContentfulPost {
      nodes {
        title
        slug
      }
    }
  }
`
