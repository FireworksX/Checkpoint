import { FC } from 'react'
import * as Styled from './styles'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import { useModal } from 'src/hooks/useModal'
import Icon from 'src/components/Icon/Icon'
import UserRowCard from '../../components/UserRowCard/UserRowCard'
import { LocationPlacemark } from '../../interfaces/Placemark'
import Link, { LinkPropsInternal } from '../../widgets/Link/Link'
import LikesContainer from '../../widgets/LikesContainer/LikesContainer'
import BookmarksContainer from '../../widgets/BookmarksContainer/BookmarksContainer'

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
          <LikesContainer type='location' target={data?._id || ''} initialLike={data?.likes.isLiked}>
            {({ ...args }) => <Styled.LikeButton mode='secondary' count={data?.likes.count} {...args} />}
          </LikesContainer>
          <BookmarksContainer type='location' target={data?._id || ''} initialBookmark={data?.bookmarks?.hasBookmark}>
            {({ hasBookmark, onClick }) => (
              <Styled.ControlButton size='l' mode='secondary' onClick={onClick}>
                <Icon name={hasBookmark ? 'bookmark-fill' : 'bookmark'} width={24} height={24} />
              </Styled.ControlButton>
            )}
          </BookmarksContainer>
        </Styled.ControlButtons>

        {data?.description && (
          <Styled.Description limit={100} expandable={false}>
            {data?.description}
          </Styled.Description>
        )}
        {author && (
          <UserRowCard
            userName={author?.userName}
            firstName={author?.firstName}
            lastName={author?.lastName}
            verify={author?.verify}
            phone={author?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: author?.userName || '',
              waitNavigate: navigateAfterClose
            }}
          />
        )}
      </Styled.Root>
    </BottomSheet>
  )
}

export default LocationPreloadModal
