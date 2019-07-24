/** @jsx jsx */
import { Styled, Container, jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data: { contentfulPage: page } }) => (
  <Layout>
    <div
      sx={{
        bg: page.heroBackgroundColor,
        color: page.heroColor
      }}
    >
      <Container sx={{ py: 5 }}>
        {page.kicker ? <Styled.h6 sx={{ m: 0 }}>{page.kicker}</Styled.h6> : null}
        <Styled.h1 sx={{ m: 0, fontSize: 7 }}>{page.title}</Styled.h1>
        <Styled.h3 sx={{ mt: 0, mb: 5 }}>{page.subtitle}</Styled.h3>

        <Link
          to='/blog'
          sx={{
            px: 4,
            py: 2,
            border: 'none',
            borderRadius: 4,
            fontSize: 3,
            textDecoration: 'none',
            bg: page.callToActionBackgroundColor,
            color: page.callToActionColor
          }}
        >
          {page.callToAction}
        </Link>
      </Container>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    contentfulPage(slug: {eq: "/"}) {
      callToAction
      callToActionColor
      callToActionBackgroundColor
      kicker
      subtitle
      title
      heroColor
      heroBackgroundColor
    }
  }
`