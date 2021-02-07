import React from 'react'
import { StyledBadge } from './styled'

interface IProps {
  title: React.ReactNode
  big?: boolean
  primary?: boolean
}

const Badge: React.FC<IProps> = ({ title, big = false, primary = false }) => {
  return <StyledBadge big={big} primary={primary}>{title}</StyledBadge>
}

export default Badge