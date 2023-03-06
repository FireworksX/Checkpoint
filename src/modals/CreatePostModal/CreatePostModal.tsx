import { FC, useState } from 'react'
import * as Styled from './styles'
import { useModal } from '../../hooks/useModal'
import { MODAL_NAMES } from '../../router/constants'
import BottomSheet from '../../widgets/BottomSheet/BottomSheet'
import Button from '../../components/Button/Button'
import { useCurrentUser } from '../../hooks/data/useCurrentUser/useCurrentUser'

interface CreatePostModalProps {
  className?: string
}

export interface CreatePostsModalContext {
  parent?: {
    author: {
      userName: string
    }
  }
  isLoading?: boolean
  onSubmit(text: string): void
  onCancel(): void | Promise<void>
}

const CreatePostModal: FC<CreatePostModalProps> = ({ className }) => {
  const [text, setText] = useState<string>('')
  const { modalContext } = useModal()
  const context = modalContext[MODAL_NAMES.postCreate]
  const parentName = context?.parent?.author?.userName
  const { user } = useCurrentUser()

  return (
    <BottomSheet name={MODAL_NAMES.postCreate} withHeader autoClose>
      <Styled.Root className={className}>
        {parentName && <Styled.ConnectedSection>Connected from @{parentName}</Styled.ConnectedSection>}
        <Styled.Header firstName={user?.firstName} lastName={user?.lastName} userName={user?.userName} />

        <Styled.Editor value={text} onChange={setText} />

        <Button size='l' stretched icon='lightning' loading={context?.isLoading} onClick={() => context?.onSubmit(text)}>
          Connect
        </Button>
      </Styled.Root>
    </BottomSheet>
  )
}

export default CreatePostModal
