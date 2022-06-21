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
import TagsFieldView from '../../widgets/locationFields/tagsField/TagsFieldView/TagsFieldView'
import Button from '../../components/Button/Button'
import RatingFieldView from "../../widgets/locationFields/ratingField/RatingFieldView/RatingFieldView";

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Gallery = styled(GalleryFieldView)`
  margin-bottom: 15px;
`

export const Title = styled(TitleFieldView)`
  margin-bottom: 15px;
`

export const Description = styled(DescriptionFieldView)`
  margin-bottom: 15px;
`

export const Kitchen = styled(KitchenTypeFieldView)`
  margin-bottom: 15px;
`

export const WifiSpeed = styled(WifispeedFieldView)`
  margin-bottom: 15px;
`

export const AverageBill = styled(AverageBillFieldView)`
  margin-bottom: 15px;
`

export const Rating = styled(RatingFieldView)`
  margin-bottom: 15px;
`

export const Tags = styled(TagsFieldView)`
  margin-bottom: 15px;
`

export const Category = styled(CompilationCell)`
  margin-bottom: 15px;
`

export const AddFieldWrapper = styled(Container)`
  text-align: center;
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
