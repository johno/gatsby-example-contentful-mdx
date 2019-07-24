import React from 'react'
import { Link } from 'gatsby'
import { Styled, Container } from 'theme-ui'

import Layout from './layout'

export default ({ posts }) => (
  <Layout>
    <Container>
      <Styled.h1>Posts</Styled.h1>
      <Styled.ul>
        {posts.map(post => (
          <Styled.li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </Styled.li>
        ))}
      </Styled.ul>
    </Container>
  </Layout>
)
