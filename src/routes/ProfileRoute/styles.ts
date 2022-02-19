import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Touchable from '../../components/Touchable/Touchable'

export const Root = styled.div`
  text-align: center;
`

export const Header = styled(PageHeader)`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 50px 1fr 50px;
`

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Avatar = styled(CommonLogo).attrs({ size: 90 })`
  margin: 40px auto 30px auto;
  border-radius: 15px;
`

export const Name = styled.h1`
  ${({ theme }) => theme.typography.text_20_24}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  text-align: center;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  padding: 0 15%;
  margin-bottom: 50px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const Group = styled.div`
  text-align: center;
  padding: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const GroupTitle = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 7px;
`

export const GroupValue = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`

export const FollowButton = styled(Touchable)`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.basicWhite};
  font-weight: bold;
  text-transform: uppercase;
  padding: 7px 20px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.primary};
  display: inline-block;
`
