import styled from 'styled-components'

export const StyledBadge = styled.span<{ big: boolean, primary: boolean }>`
  background-color: ${props => props.primary ? 'rgba(86, 115, 235, 0.12)' : 'rgba(235, 83, 116, 0.12)'};
  color: ${props => props.primary ? 'rgb(86, 115, 235)' : 'rgb(235, 83, 116)'};
  border-radius: 6px;
  -webkit-box-align: center;
  align-items: center;
  font-size: ${props => props.big ? 16 : 11}px;
  margin-right: 4px;
  padding: 0.25em 0.5em;
  
  > img {
    margin-right: 4px;
  }
`