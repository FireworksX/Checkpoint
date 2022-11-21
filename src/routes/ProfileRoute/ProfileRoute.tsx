import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { DEFAULT_ALL_CATEGORY, useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Placeholder from 'src/components/Placeholder/Placeholder'
import { staticImagesMap } from 'src/data/staticImagesMap'
import UserHeader from 'src/widgets/UserHeader/UserHeader'
import UserMetrics from 'src/components/UserMetrics/UserMetrics'
import { useModal } from 'src/hooks/useModal'
import Link from 'src/widgets/Link/Link'
import { useRouter } from 'src/hooks/useRouter'
import Spinner from 'src/components/Spinner/Spinner'
import HashtagCell from '../../components/HashtagCell/HashtagCell'
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll'
import Post from '../../widgets/Post/Post'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import PageHeaderButton from '../../widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { open } = useModal(MODAL_NAMES.profileSettings)
  const { user, categories, locations, onSelectCategory, locationsFetching, counters, selectedCategory } =
    useProfileRoute()
  const { citySlug } = useRouter()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        description='Profile'
        right={
          <Link type='profileSettings'>
            <PageHeaderButton>
              <Icon name='settings' />
            </PageHeaderButton>
          </Link>
        }
      >
        @fireworks
      </Styled.Header>

      <UserHeader
        username={user?.username}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify
        bio={user?.bio}
        mail={'test@gfd.hfgj'}
      />

      <Container>
        <Post target={<LocationCard />} />
      </Container>
    </Styled.Root>
  )
}

export default route(ProfileRoute, ROUTE_NAMES.profileReview)
