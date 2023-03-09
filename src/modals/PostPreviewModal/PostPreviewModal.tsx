import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import Link from 'src/widgets/Link/Link'
import DateFormatter from 'src/components/DateFormatter/DateFormatter'

interface PostPreviewModalProps {
  className?: string
}

export interface PostPreviewModalContext {
  target: ReactNode
  content: string
  slug: string
  author: {
    firstName?: string
    lastName?: string
    userName?: string
  }
}

const PostPreviewModal: FC<PostPreviewModalProps> = ({ className }) => {
  const { close, open, modalContext } = useModal()
  const context = modalContext[MODAL_NAMES.postPreview]

  return (
    <BottomSheet name={MODAL_NAMES.postPreview} withHeader autoClose>
      <Styled.Root className={className}>
        <Link type='user' userSlug={context?.author?.userName || ''} waitNavigate={close}>
          <Styled.Header
            firstName={context?.author?.firstName}
            lastName={context?.author?.lastName}
            userName={context?.author?.userName}
          />
        </Link>

        <Link type='post' postSlug={context?.slug} waitNavigate={close}>
          <Styled.Text>{context?.content}</Styled.Text>
        </Link>

        <Styled.Date>
          <DateFormatter date={new Date().getTime()} format='HH:mm - MMM DD, YYYY' />
        </Styled.Date>

        <Styled.Target>{context?.target}</Styled.Target>

        <Styled.Actions>
          <Styled.Action
            icon='lightning'
            onClick={() =>
              open(MODAL_NAMES.postCreate, {
                onCancel() {
                  open(MODAL_NAMES.postPreview, context)
                }
              })
            }
          >
            13
          </Styled.Action>
          <Styled.Action icon='heart'>76</Styled.Action>
          <Styled.Action icon='message-circle'>3</Styled.Action>
        </Styled.Actions>
      </Styled.Root>
    </BottomSheet>
  )
}

export default PostPreviewModal
