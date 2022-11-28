import { FC } from 'react'
import * as Styled from './styles'
import { useModal } from '../../hooks/useModal'
import { LocationFieldsModalContext } from '../LocationFieldsModal/LocationFieldsModal'
import { MODAL_NAMES } from '../../router/constants'
import BottomSheet from '../../widgets/BottomSheet/BottomSheet'
import Button from '../../components/Button/Button'
import {CancelButton} from "./styles";

interface CreatePostModalProps {
  className?: string
}

const CreatePostModal: FC<CreatePostModalProps> = ({ className }) => {
  const { context } = useModal<LocationFieldsModalContext>(MODAL_NAMES.postCreate)

  return (
    <BottomSheet name={MODAL_NAMES.postCreate} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.Header firstName='Arthur' lastName='Abeltinsh' username='fireworks' />
        <Styled.Text>
          Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast
        </Styled.Text>
        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Delim icon='lightning' />

        <Styled.Area placeholder='Your reply' />
        <Styled.Actions>
          <Styled.CancelButton size='xl' mode='secondary' icon='close-circle'/>
          <Button size='xl' mode='primary' stretched icon='edit'>
            Publish
          </Button>
        </Styled.Actions>
      </Styled.Root>
    </BottomSheet>
  )
}

export default CreatePostModal
