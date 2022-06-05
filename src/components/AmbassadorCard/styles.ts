import styled from 'styled-components'
import Button from '../Button/Button'
import Link from 'src/widgets/Link/Link'

export const Root = styled(Link)`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  min-width: 256px;
  padding-bottom: 35px;
  text-align: center;
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 15px 0;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 3px;
  text-align: center;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 25px;
  text-align: center;
`

export const SubscribeButton = styled(Button)``
