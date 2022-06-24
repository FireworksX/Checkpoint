import styled from 'styled-components'

interface Props {
  value?: number
  color?: string
}

export const Root = styled.div``

export const Label = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
`

export const BackSide = styled.div`
  background: ${({ theme }) => theme.colors.border};
  padding: 3px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  height: 30px;
`

export const FrontSide = styled.div<Props>`
  background: ${({ theme, color }) => color || theme.colors.statusDefaultBg};
  height: 100%;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  width: ${({ value }) => `${value || 0}%`};
  transition: ${({ theme }) => theme.animation.transitionDuration}
`
