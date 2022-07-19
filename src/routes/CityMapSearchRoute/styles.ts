import styled from 'styled-components'
import Page from 'src/widgets/Page/Page'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  isActive?: boolean
}

export const Root = styled(Page)``

export const Header = styled(PageHeader)`
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
`

export const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  color: ${({ theme }) => theme.colors.secondary};
`

export const ToggleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  padding: 3px;
  margin-bottom: 10px;
`

export const ToggleInner = styled(Touchable)<Props>`
  ${({ theme }) => theme.typography.text_14_24};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme, isActive }) => isActive && theme.colors.background};
  padding: 5px 10px;
  text-align: center;
`
