import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import SeparatorComp from 'src/components/Separator/Separator'
import Button from 'src/components/Button/Button'
import Page from 'src/widgets/Page/Page'
import LikesControlButton from 'src/widgets/LikesContainer/components/LikesControlButton/LikesControlButton'
import Container from 'src/components/Container/Container'

export const Root = styled(Page)``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Field = styled.div`
  margin-bottom: 15px;
`

export const AddFieldWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 25px 0;
`

export const Separator = styled(SeparatorComp)`
  margin: 25px 0;
`

export const ControlButtons = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const ControlButton = styled(Button)`
  margin-right: 15px;
`

export const LikeButton = styled(LikesControlButton)`
  margin-right: 15px;
`
