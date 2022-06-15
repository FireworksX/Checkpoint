import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Placeholder from 'src/components/Placeholder/Placeholder'
import { staticImagesMap } from 'src/data/staticImagesMap'
import UserHeader from 'src/components/UserHeader/UserHeader'
import UserMetrics from 'src/components/UserMetrics/UserMetrics'
import CreateCategoryModal from './widgets/CreateCategoryModal/CreateCategoryModal'
import { CompilationInfo } from './styles'
import ActionSheet from '../../widgets/ActionSheet/ActionSheet'
import { useModal } from '../../hooks/useModal'
import ActionSheetItem from '../../widgets/ActionSheet/components/ActionSheetItem/ActionSheetItem'
import ProfileSettingsModal from './widgets/ProfileSettingsModal/ProfileSettingsModal'

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { open } = useModal(MODAL_NAMES.profileSettings)
  const { user, categories, locations, onSelectCategory, locationsFetching, counters } = useProfileRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        left={<PageHeaderButtonBack />}
        right={
          <Styled.HeaderButton onClick={open}>
            <Icon name='ellipsis' />
          </Styled.HeaderButton>
        }
      >
        <Styled.HeaderTitle>@{user?.username}</Styled.HeaderTitle>
      </Styled.Header>

      <UserHeader
        username={user?.username}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        phone={user?.phone}
      />

      <UserMetrics
        locations={{ count: counters?.locations }}
        followers={{ count: counters?.followers, appLinkProps: { type: 'profileFollowers' } }}
        subscribers={{ count: counters?.subscribers, appLinkProps: { type: 'profileSubscribers' } }}
      />

      <Styled.CompilationWrapper>
        {categories.map((el, index) => (
          <Styled.Compilation
            key={`${el.slug}_${index}`}
            title={el.name}
            image={el.icon}
            description={el.description}
            isActive={el.isActive}
            onClick={() => onSelectCategory(el.slug)}
          />
        ))}
      </Styled.CompilationWrapper>

      {(locations?.length || 0) > 0 && (
        <Container>
          <Button stretched size='l'>
            Показать на карте
          </Button>
        </Container>
      )}

      {(locations?.length || 0) === 0 && !locationsFetching && (
        <Placeholder header='Пока ничего нет' icon={<Styled.PlaceholderImage src={staticImagesMap.dottedLineFace} />}>
          В этой категории пока ничего нет, пустота...
        </Placeholder>
      )}
      <Styled.LocationsWrapper>
        {locations?.map(location => (
          <Styled.LocationCell
            key={location._id}
            name={location.title}
            cover={'https://image.bugsm.co.kr/album/images/500/204702/20470222.jpg'}
            description={location.description}
          />
        ))}
      </Styled.LocationsWrapper>

      <CreateCategoryModal />
      <ProfileSettingsModal />
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileRoute), ROUTE_NAMES.profileReview)
