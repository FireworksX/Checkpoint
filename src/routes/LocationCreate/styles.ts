import styled from 'styled-components'
import PageHeader from '../../widgets/PageHeader/PageHeader'
import GalleryFieldView from '../../widgets/locationFields/galleryField/GalleryFieldView/GalleryFieldView'
import TitleFieldView from '../../widgets/locationFields/titleField/TitleFieldView/TitleFieldView'
import DescriptionFieldView from '../../widgets/locationFields/descriptionField/DescriptionFieldView/DescriptionFieldView'
import Container from '../../components/Container/Container'
import KitchenTypeFieldView from '../../widgets/locationFields/kitchenTypeField/KitchenTypeFieldView/KitchenTypeFieldView'
import CompilationCell from '../../components/CompilationCell/CompilationCell'
import WifispeedFieldView from '../../widgets/locationFields/wifispeedField/WifispeedFieldView/WifispeedFieldView'
import AverageBillFieldView from '../../widgets/locationFields/averageBillField/AverageBillFieldView/AverageBillFieldView'
import SeparatorComp from '../../components/Separator/Separator'
import Button from '../../components/Button/Button'
import GalleryFieldEdit from '../../widgets/locationFields/galleryField/GalleryFieldEdit/GalleryFieldEdit'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Gallery = styled(GalleryFieldEdit)`
  margin-bottom: 15px;
`

export const Field = styled.div`
  margin-bottom: 15px;
`

export const Title = styled.div`
  margin-bottom: 15px;
`

export const Description = styled.div`
  margin-bottom: 15px;
`

export const Kitchen = styled.div`
  margin-bottom: 15px;
`

export const WifiSpeed = styled.div`
  margin-bottom: 15px;
`

export const AverageBill = styled.div`
  margin-bottom: 15px;
`

export const Rating = styled.div`
  margin-bottom: 15px;
`

export const Tags = styled.div`
  margin-bottom: 15px;
`

export const Category = styled(CompilationCell)`
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

  &:last-child {
    margin-right: 0;
  }
`
