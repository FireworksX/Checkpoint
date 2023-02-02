import { FC } from 'react'
import * as Styled from './styles'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import Button from '../../components/Button/Button'

interface PlacePreviewModalProps {
  className?: string
}

export interface PlacePreviewModalContext {
  name: string
  address: string
  slug?: string
  logo?: string
  onConnect(): void
  onDetail(): void
}

const PlacePreviewModal: FC<PlacePreviewModalProps> = ({ className }) => {
  const { context } = useModal(MODAL_NAMES.placePreview)

  return (
    <BottomSheet name={MODAL_NAMES.placePreview} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.Header firstName={context?.name} description={context?.address} avatar={context?.logo} />

        <Styled.Actions>
          <Styled.Action size='l' stretched mode='secondary' onClick={context?.onDetail}>
            Detail
          </Styled.Action>

          <Button size='l' icon='lightning' onClick={context?.onConnect} />
        </Styled.Actions>
      </Styled.Root>
    </BottomSheet>
  )
}

export default PlacePreviewModal
