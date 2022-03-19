import { FC } from 'react'
import * as Styled from './styles'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import Container from 'src/components/Container/Container'
import { useStore } from 'src/store'
import { useRouter } from 'src/hooks/useRouter'
import { useCreatePlaceRoute } from './hooks/useCreatePlaceRoute'

interface CreatePlaceRouteProps {
  className?: string
}

const CreatePlaceRoute: FC<CreatePlaceRouteProps> = ({ className }) => {
  const { register, onSubmit } = useCreatePlaceRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <PageHeaderButtonBack />
        <Styled.HeaderTitle>Create place</Styled.HeaderTitle>
      </Styled.Header>
      <form onSubmit={onSubmit}>
        <Container>
          <Styled.Field label='Title' {...register('title', { required: true, minLength: 3, maxLength: 100 })} />
          <Styled.Field label='Description' textarea {...register('description')} />
          <Styled.Field label='Latitude' disabled {...register('lat', { required: true })} />
          <Styled.Field label='Longitude' disabled {...register('lng', { required: true })} />
          <Styled.Submit type='submit'>Submit</Styled.Submit>
        </Container>
      </form>
    </Styled.Root>
  )
}

export default CreatePlaceRoute
