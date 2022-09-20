import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import Container from 'src/components/Container/Container'
import Icon from 'src/components/Icon/Icon'
import UserRowCard from 'src/components/UserRowCard/UserRowCard'
import { useLocationView } from './hooks/useLocationView'
import { iconToImage } from 'src/utils/iconToImage'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'
import Link from 'src/widgets/Link/Link'
import LikesContainer from 'src/widgets/LikesContainer/LikesContainer'
import BookmarksContainer from 'src/widgets/BookmarksContainer/BookmarksContainer'
import Button from '../../components/Button/Button'
import { noop } from '../../utils/helpers'

interface LocationViewProps {
  className?: string
}

const LocationView: FC<LocationViewProps> = ({ className }) => {
  const {
    author,
    category,
    fields,
    openOptions,
    fetching,
    isSelfLocation,
    location,
    toggleIsEdit,
    isEdit,
    openLocationFieldsModal,
    openChooseCategory,
    handleSubmit,
    isExists
  } = useLocationView()

  return (
    <Styled.Root className={className} fetching={fetching}>
      <Styled.Header
        left={
          !isEdit && (
            <PageHeaderButton>
              <PageHeaderButtonBack />
            </PageHeaderButton>
          )
        }
        right={
          !isEdit && (
            <PageHeaderButton onClick={openOptions}>
              <Icon name='ellipsis' />
            </PageHeaderButton>
          )
        }
      />

      <Styled.Field>{fields.galleryField.Component}</Styled.Field>

      <Container>
        {!fields.titleField.isEmpty && <Styled.Field>{fields.titleField.Component}</Styled.Field>}

        {!isEdit && (
          <Styled.ControlButtons>
            <Link type='cityMap' mapAuthor={author?.username} mapCategory={category?.slug} mapLocation={location?.slug}>
              <Styled.ControlButton size='l'>Показать на карте</Styled.ControlButton>
            </Link>
            {!isSelfLocation && (
              <>
                <LikesContainer type='location' target={location?._id || ''} initialLike={location?.likes.isLiked}>
                  {({ ...args }) => <Styled.LikeButton mode='secondary' count={location?.likes.count} {...args} />}
                </LikesContainer>
                <BookmarksContainer
                  type='location'
                  target={location?._id || ''}
                  initialBookmark={location?.bookmarks.hasBookmark}
                >
                  {({ hasBookmark, onClick }) => (
                    <Styled.ControlButton size='l' mode='secondary' onClick={onClick}>
                      <Icon name={hasBookmark ? 'bookmark-fill' : 'bookmark'} width={24} height={24} />
                    </Styled.ControlButton>
                  )}
                </BookmarksContainer>
              </>
            )}
          </Styled.ControlButtons>
        )}

        {isExists('description') && <Styled.Field>{fields.descriptionField.Component}</Styled.Field>}

        {isExists('kitchen') && <Styled.Field>{fields.kitchenField.Component}</Styled.Field>}
        {isExists('averageBill') && <Styled.Field>{fields.averageBillField.Component}</Styled.Field>}

        {isExists('wifi') && <Styled.Field>{fields.wifispeedField.Component}</Styled.Field>}

        {/*{!fields.poolsField.isEmpty && <Styled.Field>{fields.poolsField.Component}</Styled.Field>}*/}
        {isExists('tags') && <Styled.Field>{fields.tagsField.Component}</Styled.Field>}

        {isEdit && category ? (
          <CompilationCell
            title={category.name}
            description={category.description}
            image={iconToImage(category.icon)}
            onClick={isEdit ? openChooseCategory : noop}
          />
        ) : (
          <Link type='cityMap' mapAuthor={author?.username} mapCategory={category?.slug}>
            <CompilationCell
              title={category?.name || ''}
              description={category?.description}
              image={iconToImage(category?.icon)}
            />
          </Link>
        )}

        <Styled.AddFieldWrapper>
          {isEdit && (
            <Button mode='secondary' disabled={!isEdit} onClick={openLocationFieldsModal}>
              Добавить поле
            </Button>
          )}
          <Button mode='secondary' onClick={isEdit ? handleSubmit : toggleIsEdit}>
            {isEdit ? 'Сохранить' : 'Редактировать'}
          </Button>
        </Styled.AddFieldWrapper>

        <Styled.Separator />
        {author && (
          <UserRowCard
            username={author?.username}
            firstName={author?.firstName}
            lastName={author?.lastName}
            verify={author?.verify}
            mail={author?.mail}
            appLinkProps={{
              type: 'user',
              userSlug: author?.username || ''
            }}
          />
        )}
      </Container>
    </Styled.Root>
  )
}

export default route(LocationView, ROUTE_NAMES.locationView)
