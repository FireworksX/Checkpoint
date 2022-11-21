import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import ProfileInfoFields from 'src/widgets/ProfileInfoFields/ProfileInfoFields'
import Container from 'src/components/Container/Container'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileEditRoute } from './hooks/useProfileEditRoute'
import Button from '../../components/Button/Button'

interface ProfileSettingsRouteProps {
  className?: string
}

const ProfileSettingsRoute: FC<ProfileSettingsRouteProps> = ({ className }) => {
  const { fields, avatarText, onSubmitForm } = useProfileEditRoute()

  return (
    <Styled.Root className={className}>
      <form onSubmit={onSubmitForm}>
        <Styled.Header left={<PageHeaderButtonBack />}>Settings</Styled.Header>
        <Container>
          <ProfileInfoFields fields={fields} avatarText={avatarText} />
          <Button stretched size='xl'>
            Save
          </Button>
        </Container>
      </form>
    </Styled.Root>
  )
}

export default route(ProfileSettingsRoute, ROUTE_NAMES.profileSettings)
