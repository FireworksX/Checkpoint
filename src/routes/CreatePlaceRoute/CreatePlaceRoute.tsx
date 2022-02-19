import { FC } from 'react'
import * as Styled from './styles'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import Container from 'src/components/Container/Container'
import { useStore } from 'src/store'
import { useRouter } from 'src/hooks/useRouter'

interface CreatePlaceRouteProps {
  className?: string
}

const CreatePlaceRoute: FC<CreatePlaceRouteProps> = ({ className }) => {
  const { back } = useRouter()
  const { saveCenter, addPlacemark } = useStore.mapStore()

  const onSubmit = () => {
    addPlacemark({
      id: Math.random(),
      lat: saveCenter?.lat,
      lng: saveCenter.lng
    })
    back()
  }

  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <PageHeaderButtonBack />
        <Styled.HeaderTitle>Create place</Styled.HeaderTitle>
      </Styled.Header>
      <Container>
        <Styled.Field label='Title' icon='pencil' />
        <Styled.Field label='Description' icon='pencil' textarea />
        <Styled.Submit onClick={onSubmit}>Submit</Styled.Submit>
      </Container>
    </Styled.Root>
  )
}

export default CreatePlaceRoute
