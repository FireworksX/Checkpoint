import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from '../../router/constants'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import GalleryFieldView from '../../widgets/locationFields/galleryField/GalleryFieldView/GalleryFieldView'
import {
  AddFieldWrapper,
  AverageBill,
  Category,
  ControlButton,
  ControlButtons,
  Description,
  Field,
  Gallery,
  Kitchen,
  Rating,
  Separator,
  Tags,
  WifiSpeed
} from './styles'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import { useModal } from '../../hooks/useModal'
import UserRowCard from '../../components/UserRowCard/UserRowCard'
import { useCurrentUser } from '../../hooks/data/useCurrentUser'
import CompilationCell from '../../components/CompilationCell/CompilationCell'
import { staticImagesMap } from '../../data/staticImagesMap'
import Icon from '../../components/Icon/Icon'
import RadioButtons from 'src/widgets/RadioButtons/RadioButtons'
import RadioButtonIcon from '../../widgets/RadioButtons/components/RadioButtonIcon/RadioButtonIcon'
import { useRadioButtons } from '../../widgets/RadioButtons/hooks/useRadioButtons'
import Slider from '../../components/Slider/Slider'
import ChipsInput from '../../widgets/ChipsInput/ChipsInput'
import Chip from '../../widgets/ChipsInput/components/Chip/Chip'
import { useLocationCreate } from './hooks/useLocationCreate'

interface LocationCreateProps {
  className?: string
}

const LocationCreate: FC<LocationCreateProps> = ({ className }) => {
  const { user } = useCurrentUser()
  const { openModal, fields, isExists, isEdit, toggleIsEdit } = useLocationCreate()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        left={
          <PageHeaderButton>
            <PageHeaderButtonBack />
          </PageHeaderButton>
        }
        right={<PageHeaderButton>Сохранить</PageHeaderButton>}
      />

      {isExists('gallery') && <Styled.Field>{fields.galleryField.Component}</Styled.Field>}

      <Container>
        {isExists('title') && <Styled.Title>{fields.titleField.Component}</Styled.Title>}

        {isExists('description') && <Styled.Field>{fields.descriptionField.Component}</Styled.Field>}

        {/*<Styled.ControlButtons>*/}
        {/*  <Styled.ControlButton size='l'>Показать на карте</Styled.ControlButton>*/}
        {/*  <Styled.ControlButton size='l' mode='secondary'>*/}
        {/*    <Icon name='heart' width={24} height={24} /> 150*/}
        {/*  </Styled.ControlButton>*/}
        {/*  <Styled.ControlButton size='l' mode='secondary'>*/}
        {/*    <Icon name='bookmark' width={24} height={24} />*/}
        {/*  </Styled.ControlButton>*/}
        {/*</Styled.ControlButtons>*/}

        {isExists('kitchen') && <Styled.Field>{fields.kitchenField.Component}</Styled.Field>}
        {isExists('averageBill') && <Styled.Field>{fields.averageBillField.Component}</Styled.Field>}

        {isExists('wifi') && <Styled.Field>{fields.wifispeedField.Component}</Styled.Field>}

        {isExists('polls') && <Styled.Field>{fields.poolsField.Component}</Styled.Field>}
        {isExists('tags') && <Styled.Field>{fields.tagsField.Component}</Styled.Field>}

        <Styled.AddFieldWrapper>
          <Button mode='secondary' disabled={!isEdit} onClick={openModal}>
            Добавить поле
          </Button>
          <Button mode='secondary' onClick={toggleIsEdit}>
            {isEdit ? 'Предпросмотр' : 'Редактировать'}
          </Button>
        </Styled.AddFieldWrapper>

        <Styled.Separator />
        <UserRowCard
          username={user?.username}
          firstName={user?.firstName}
          lastName={user?.lastName}
          verify={user?.verify}
          phone={user?.phone}
          appLinkProps={{
            type: 'user',
            userSlug: user?.username || ''
          }}
        />
      </Container>
    </Styled.Root>
  )
}

export default route(LocationCreate, ROUTE_NAMES.locationCreate)
