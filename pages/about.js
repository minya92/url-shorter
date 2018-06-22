import React from 'react'
import Page from '../layouts/Page'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 18px;
  color: #2c3e50;
  a {
    color: #3498db;
  }
`

const Wrapper = styled.div`
  text-align: center;
`

export default () => (
    <Page>
        <Wrapper>
            <Text>This is a open source project hosted in <a href="https://github.com/minya92/url-shorter">github</a></Text>
            <Text>If you have any comments or suggestions, you can create <a href="https://github.com/minya92/url-shorter/issues/new">issue on github</a></Text>
        </Wrapper>
    </Page>
)
