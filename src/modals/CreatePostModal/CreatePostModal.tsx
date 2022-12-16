import { FC } from 'react'
import * as Styled from './styles'
import { useModal } from '../../hooks/useModal'
import { MODAL_NAMES } from '../../router/constants'
import BottomSheet from '../../widgets/BottomSheet/BottomSheet'
import Button from '../../components/Button/Button'

interface CreatePostModalProps {
  className?: string
}

export interface CreatePostsModalContext {
  onCancel(): void
}

const CreatePostModal: FC<CreatePostModalProps> = ({ className }) => {
  const { context } = useModal<CreatePostsModalContext>(MODAL_NAMES.postCreate)

  return (
    <BottomSheet name={MODAL_NAMES.postCreate} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.Header firstName='Arthur' lastName='Abeltinsh' userName='fireworks' />
        <Styled.Text>
          Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast
        </Styled.Text>
        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Delim icon='lightning' />

        <Styled.Area placeholder='Your reply' />
        <Styled.Actions>
          <Styled.CancelButton size='xl' mode='secondary' icon='close-circle' onClick={context?.onCancel}/>
          <Button size='xl' mode='primary' stretched icon='edit'>
            Publish
          </Button>
        </Styled.Actions>
      </Styled.Root>
    </BottomSheet>
  )
}

export default CreatePostModal
