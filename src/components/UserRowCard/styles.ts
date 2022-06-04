import styled from 'styled-components'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Link from 'src/widgets/Link/Link'

export const Root = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Avatar = styled(CommonLogo).attrs({
  withRadius: true,
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
