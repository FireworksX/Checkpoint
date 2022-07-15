import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import SeparatorComp from 'src/components/Separator/Separator'
import Button from 'src/components/Button/Button'
import Page from 'src/widgets/Page/Page'
import LikesControlButton from '../../widgets/LikesContainer/components/LikesControlButton/LikesControlButton'

export const Root = styled(Page)``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Field = styled.div`
  margin-bottom: 15px;
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

  &:last-child {
    margin-right: 0;
  }
`

export const LikeButton = styled(LikesControlButton)`
  margin-right: 15px;
`
