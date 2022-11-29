import { FC } from 'react'
import * as Styled from './styles'
import { useModal } from '../../hooks/useModal'
import { MODAL_NAMES } from '../../router/constants'
import { LocationFieldsModalContext } from '../LocationFieldsModal/LocationFieldsModal'
import SimpleCell from '../../components/SimpleCell/SimpleCell'
import BottomSheet from '../../widgets/BottomSheet/BottomSheet'
import UserHeader from '../../components/UserHeader/UserHeader'
import Button from '../../components/Button/Button'
import Link from '../../widgets/Link/Link'
import {CreatePostsModalContext} from "../CreatePostModal/CreatePostModal";

interface PostPreviewModalProps {
  className?: string
}

const PostPreviewModal: FC<PostPreviewModalProps> = ({ className }) => {
  const { context, close, open: openPreview } = useModal<LocationFieldsModalContext>(MODAL_NAMES.postPreview)
  const { open } = useModal<CreatePostsModalContext>(MODAL_NAMES.postCreate)

  return (
    <BottomSheet name={MODAL_NAMES.postPreview} withHeader autoClose>
      <Styled.Root className={className}>
        <Link>

        <Styled.Header firstName='Arthur' lastName='Abeltinsh' username='fireworks' />
        </Link>

        <Link type='post' postSlug='test' waitNavigate={close}>
          <Styled.Text>
            Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast
          </Styled.Text>
        </Link>

        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Target />

        <Styled.Actions>
          <Styled.Action icon='lightning' onClick={() => open({
            onCancel() {
              openPreview(context)
            }
          })}>
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
