import styled from 'styled-components'
import PageHeader from '../../widgets/PageHeader/PageHeader'
import SeparatorComp from "../../components/Separator/Separator";
import Button from "../../components/Button/Button";

export const Root = styled.div``

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
