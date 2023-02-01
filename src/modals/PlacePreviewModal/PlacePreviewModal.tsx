import { FC } from 'react'
import * as Styled from './styles'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import Button from "../../components/Button/Button";

interface PlacePreviewModalProps {
  className?: string
}

export interface PlacePreviewModalContext {
  name: string
  address: string
  slug: string
  logo?: string
}

const PlacePreviewModal: FC<PlacePreviewModalProps> = ({ className }) => {
  const { context, close: closeSelf } = useModal(MODAL_NAMES.placePreview)
  const { open } = useModal(MODAL_NAMES.postCreate)

  return (
    <BottomSheet name={MODAL_NAMES.placePreview} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.Header firstName={context?.name} description={context?.address} avatar={context?.logo} />

        <Styled.Actions>
          <Styled.Action type='location' locationSlug={context?.slug || 'custom-location'} waitNavigate={closeSelf}>
            <Button size='l' stretched mode='secondary'>
              Detail
            </Button>
          </Styled.Action>

          <Button size='l' icon='lightning' onClick={open} />
        </Styled.Actions>
      </Styled.Root>
    </BottomSheet>
  )
}

export default PlacePreviewModal
