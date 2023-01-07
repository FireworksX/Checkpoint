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
  const { context } = useModal(MODAL_NAMES.postCreate)

  return (
    <BottomSheet name={MODAL_NAMES.postCreate} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.ConnectedSection>Connected from @dodi</Styled.ConnectedSection>
        <Styled.Header firstName='Arthur' lastName='Abeltinsh' userName='fireworks' />

        <Styled.Editor />

        <Button size='l' stretched icon='lightning'>
          Connect
        </Button>
      </Styled.Root>
    </BottomSheet>
  )
}

export default CreatePostModal
