import {FC} from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import ProfileInfoFields from 'src/widgets/ProfileInfoFields/ProfileInfoFields'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileEditRoute } from './hooks/useProfileEditRoute'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'

interface ProfileSettingsRouteProps {
  className?: string
}

const ProfileSettingsRoute: FC<ProfileSettingsRouteProps> = ({ className }) => {
  const { fields, avatarText, updating, onSubmitForm, logout } = useProfileEditRoute()

    return (
    <Styled.Root
      className={className}
      title='Settings'
      headerLeft={<PageHeaderButtonBack />}
      headerRight={
        <PageHeaderButton onClick={logout}>
          <Icon name='sign-out' />
        </PageHeaderButton>
      }
    >
      <Styled.Wrapper>
        <ProfileInfoFields
          fields={fields}
          avatarText={avatarText}
          onSubmit={onSubmitForm}
          formChildren={
            <Button stretched size='xl' loading={updating}>
              Save
            </Button>
          }
        />
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(ProfileSettingsRoute, ROUTE_NAMES.profileSettings)
