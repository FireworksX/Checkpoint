import styled from 'styled-components'
import Page from '../../widgets/Page/Page'
import CreateButton from '../../components/CreateButton/CreateButton'

export const Root = styled(Page)``

export const Create = styled(CreateButton)`
  position: fixed;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  bottom: 100px;
`
