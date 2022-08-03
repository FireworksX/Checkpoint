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

interface ProfileEditRouteProps {
  className?: string
}

const ProfileEditRoute: FC<ProfileEditRouteProps> = ({ className }) => {
  const { fields, avatarText, onSubmitForm } = useProfileEditRoute()

  return (
    <Styled.Root className={className}>
      <form onSubmit={onSubmitForm}>
        <Styled.Header
          left={
            <PageHeaderButton>
              <PageHeaderButtonBack />
            </PageHeaderButton>
          }
          right={
            <PageHeaderButton tagName='button' type='submit'>
              Сохранить
            </PageHeaderButton>
          }
        />
        <Container>
          <ProfileInfoFields fields={fields} avatarText={avatarText} />
        </Container>
      </form>
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileEditRoute), ROUTE_NAMES.profileEdit)
