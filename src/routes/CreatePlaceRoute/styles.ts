import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Input from 'src/components/Input/Input'
import Touchable from '../../components/Touchable/Touchable'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 50px 1fr 50px;
  margin-bottom: 50px;
`

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Field = styled(Input)`
  margin-bottom: 30px;
`

export const Submit = styled(Touchable).attrs({ tagName: 'button' })`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.basicWhite};
  border: none;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 15px;
  text-align: center;
`
