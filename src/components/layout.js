import React from 'react'
import { Global } from '@emotion/core'
import { Styled } from 'theme-ui'

export default ({ children }) => (
  <Styled.root>
    <Global
      styles={{
        body: {
          margin: 0
        }
      }}
    />
    {children}
  </Styled.root>
)
