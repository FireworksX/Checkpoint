import styled from 'styled-components'
import Link from 'src/widgets/Link/Link'
import Avatar from 'src/widgets/Avatar/Avatar'

export const Root = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const AvatarComponent = styled(Avatar).attrs({
  size: 44
})`
  margin-right: 15px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
  margin-bottom: 3px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
`
