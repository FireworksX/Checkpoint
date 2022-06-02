import styled from 'styled-components'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  isActive?: boolean
}

export const Root = styled(Touchable)<Props>`
  display: flex;
  align-items: center;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.border : theme.colors.backgroundWhite)};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 7px 15px;
`

export const Image = styled(BaseImage)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_10_12};
  color: ${({ theme }) => theme.colors.secondary};
`
