import React, { useState } from 'react'
import styled from 'styled-components'
import { MyComponent } from '../../../packages/my-lib/src'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {

  return (
    <Container>
      <MyComponent />
    </Container>
  )
}
