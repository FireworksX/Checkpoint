import styled from 'styled-components'
import Page from 'src/widgets/Page/Page'
import Post from '../../widgets/Post/Post'
import CreateButton from '../../components/CreateButton/CreateButton'

export const Root = styled(Page)``

export const PostWrapper = styled(Post)`
  margin-bottom: 15px;
`

export const Create = styled(CreateButton)`
  position: fixed;
  bottom: 100px;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`
