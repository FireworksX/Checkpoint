import styled from 'styled-components'
import TitleFieldView from 'src/widgets/locationFields/titleField/TitleFieldView/TitleFieldView'
import DescriptionFieldView from '../../widgets/locationFields/descriptionField/DescriptionFieldView/DescriptionFieldView'
import Container from 'src/components/Container/Container'
import Touchable from '../../components/Touchable/Touchable'
import Button from '../../components/Button/Button'

export const Root = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Close = styled(Touchable).attrs({ tagName: 'button' })`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondaryLightBg};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
`

export const Title = styled(TitleFieldView)`
  margin-bottom: 15px;
`

export const Description = styled(DescriptionFieldView)`
  margin-bottom: 10px;
`

export const ControlButtons = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const ControlButton = styled(Button)`
  margin-left: 15px;

  &:first-child {
    margin-left: 0;
  }
`
