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
import { noop } from 'src/utils/helpers'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'

interface LocationViewProps {
  className?: string
}

const LocationView: FC<LocationViewProps> = ({ className }) => {
  const { author, category, fields, openOptions, fetching } = useLocationView()

  return (
    <Styled.Root className={className} fetching={fetching}>
      <Styled.Header
        left={
          <PageHeaderButton>
            <PageHeaderButtonBack />
          </PageHeaderButton>
        }
        right={
          <PageHeaderButton onClick={openOptions}>
            <Icon name='ellipsis' />
          </PageHeaderButton>
        }
      />

      <Styled.Field>{fields.galleryField.Component}</Styled.Field>

      <Container>
        {!fields.titleField.isEmpty && <Styled.Field>{fields.titleField.Component}</Styled.Field>}

        <Styled.ControlButtons>
          <Styled.ControlButton size='l'>Показать на карте</Styled.ControlButton>
          <Styled.ControlButton size='l' mode='secondary'>
            <Icon name='heart' width={24} height={24} /> 150
          </Styled.ControlButton>
          <Styled.ControlButton size='l' mode='secondary'>
            <Icon name='bookmark' width={24} height={24} />
          </Styled.ControlButton>
        </Styled.ControlButtons>

        {!fields.descriptionField.isEmpty && <Styled.Field>{fields.descriptionField.Component}</Styled.Field>}

        {!fields.kitchenField.isEmpty && <Styled.Field>{fields.kitchenField.Component}</Styled.Field>}
        {!fields.averageBillField.isEmpty && <Styled.Field>{fields.averageBillField.Component}</Styled.Field>}

        {!fields.wifispeedField.isEmpty && <Styled.Field>{fields.wifispeedField.Component}</Styled.Field>}

        {!fields.poolsField.isEmpty && <Styled.Field>{fields.poolsField.Component}</Styled.Field>}
        {!fields.tagsField.isEmpty && <Styled.Field>{fields.tagsField.Component}</Styled.Field>}

        <CompilationCell
          title={category?.name || ''}
          description={category?.description}
          image={iconToImage(category?.icon)}
          onClick={noop}
        />

        <Styled.Separator />
        {author && (
          <UserRowCard
            username={author?.username}
            firstName={author?.firstName}
            lastName={author?.lastName}
            verify={author?.verify}
            phone={author?.phone}
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
