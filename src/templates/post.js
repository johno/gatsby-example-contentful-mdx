import React from 'react'
import { graphql } from 'gatsby'

import Post from '../components/post'

export default ({ data: { contentfulPost: post } }) => (
  <Post
    title={post.title}
    mdx={post.content.childMdx.body}
    authorName={post.author.name}
    authorAvatarUrl={post.author.avatar.file.url}
  />
)

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      content {
        childMdx {
          body
        }
      }
      author {
        name
        avatar {
          file {
            url
          }
        }
      }
    }
  }
`
