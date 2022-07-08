import { FC } from 'react'
import * as Styled from './styles'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import { useModal } from 'src/hooks/useModal'
import Icon from 'src/components/Icon/Icon'
import UserRowCard from '../../components/UserRowCard/UserRowCard'
import { LocationPlacemark } from '../../interfaces/Placemark'
import Link, { LinkPropsInternal } from '../../widgets/Link/Link'

interface LocationPreloadModalProps {
  className?: string
}

export interface LocationPreloadModalContext {
  placemark: LocationPlacemark
  onClose(): void
}

const LocationPreloadModal: FC<LocationPreloadModalProps> = ({ className }) => {
  const { context } = useModal<LocationPreloadModalContext>(MODAL_NAMES.locationPreloadModal)

  const data = context?.placemark
  const author = data?.author

  const navigateAfterClose: LinkPropsInternal['waitNavigate'] = async navigate => {
    await context?.onClose()
    navigate()
  }

  return (
    <BottomSheet name={MODAL_NAMES.locationPreloadModal} withHeader autoClose>
      <Styled.Root className={className}>
        <Styled.Close onClick={context?.onClose}>
          <Icon name='close' width={14} height={14} />
        </Styled.Close>
        {data?.title && <Styled.Title value={data?.title} />}

        <Styled.ControlButtons>
          <Link type='locationView' locationSlug={data?.slug} waitNavigate={navigateAfterClose}>
            <Styled.ControlButton size='l'>Детальная инфа</Styled.ControlButton>
          </Link>
          <Styled.ControlButton size='l' mode='secondary'>
            <Icon name='heart' width={24} height={24} /> 150
          </Styled.ControlButton>
          <Styled.ControlButton size='l' mode='secondary'>
            <Icon name='bookmark' width={24} height={24} />
          </Styled.ControlButton>
        </Styled.ControlButtons>

        {data?.description && (
          <Styled.Description limit={100} expandable={false}>
            {data?.description}
          </Styled.Description>
        )}
        {author && (
          <UserRowCard
            username={author?.username}
            firstName={author?.firstName}
            lastName={author?.lastName}
            verify={author?.verify}
            phone={author?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: author?.username || '',
              waitNavigate: navigateAfterClose
            }}
          />
        )}
      </Styled.Root>
    </BottomSheet>
  )
}

export default LocationPreloadModal
