import React from 'react'
import styled from 'styled-components'

const Layout:React.FC = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  max-width: 390px;
  margin: 0 auto;
`

export default Layout