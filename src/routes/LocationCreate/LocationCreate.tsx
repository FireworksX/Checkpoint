import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import UserRowCard from '../../components/UserRowCard/UserRowCard'
import { useCurrentUser } from '../../hooks/data/useCurrentUser'
import { useLocationCreate } from './hooks/useLocationCreate'
import CompilationCell from '../../components/CompilationCell/CompilationCell'
import { staticImagesMap } from '../../data/staticImagesMap'
import { iconToImage } from '../../utils/iconToImage'
import { noop } from '../../utils/helpers'

interface LocationCreateProps {
  className?: string
}

const LocationCreate: FC<LocationCreateProps> = ({ className }) => {
  const { user } = useCurrentUser()
  const { openModal, fields, isExists, isEdit, canCreate, category, toggleIsEdit, openChooseCategory, handleSubmit } =
    useLocationCreate()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        left={
          <PageHeaderButton>
            <PageHeaderButtonBack />
          </PageHeaderButton>
        }
        right={
          <PageHeaderButton disabled={!canCreate} onClick={handleSubmit}>
            {category ? 'Сохранить' : 'Далее'}
          </PageHeaderButton>
        }
      />

      {isExists('gallery') && <Styled.Field>{fields.galleryField.Component}</Styled.Field>}

      <Container>
        {isExists('title') && <Styled.Title>{fields.titleField.Component}</Styled.Title>}

        {isExists('description') && <Styled.Field>{fields.descriptionField.Component}</Styled.Field>}

        {isExists('kitchen') && <Styled.Field>{fields.kitchenField.Component}</Styled.Field>}
        {isExists('averageBill') && <Styled.Field>{fields.averageBillField.Component}</Styled.Field>}

        {isExists('wifi') && <Styled.Field>{fields.wifispeedField.Component}</Styled.Field>}

        {/*{isExists('polls') && <Styled.Field>{fields.poolsField.Component}</Styled.Field>}*/}
        {isExists('tags') && <Styled.Field>{fields.tagsField.Component}</Styled.Field>}

        <Styled.Field>
          {category ? (
            <CompilationCell
              title={category.name}
              description={category.description}
              image={iconToImage(category.icon)}
              onClick={isEdit ? openChooseCategory : noop}
            />
          ) : (
            <CompilationCell
              title='Категория'
              description='Нужно выбрать категорию'
              image={staticImagesMap.plus}
              onClick={isEdit ? openChooseCategory : noop}
            />
          )}
        </Styled.Field>

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
