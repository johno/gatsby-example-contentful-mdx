/** @jsx jsx */
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Styled, Container, jsx } from 'theme-ui'

import Layout from './layout'

export default ({
  title,
  mdx,
  authorName,
  authorAvatarUrl
}) => {

  return (
    <Layout>
      <Container>
        <article>
          <Styled.h1>{title}</Styled.h1>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              sx={{
                width: 40,
                height: 40,
                borderRadius: 9999
              }}
              alt={`Avatar for ${authorName}`}
              src={authorAvatarUrl}
            />
            <Styled.h5 sx={{ ml: 3, color: 'darkGray' }}>by {authorName}</Styled.h5>
          </div>
          <MDXRenderer>{mdx}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}
