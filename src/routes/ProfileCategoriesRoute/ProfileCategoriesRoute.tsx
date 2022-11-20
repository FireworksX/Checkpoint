import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileCategoriesRoute } from './hooks/useProfileCategoriesRoute'
import Icon from 'src/components/Icon/Icon'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import Placeholder from 'src/components/Placeholder/Placeholder'

interface ProfileCategoriesRouteProps {
  className?: string
}

const ProfileCategoriesRoute: FC<ProfileCategoriesRouteProps> = ({ className }) => {
  const { list, editCategory, createCategory, removeCategory } = useProfileCategoriesRoute()


    return (
    <Styled.Root className={className}>
      <Styled.Header
        left={
          <PageHeaderButton>
            <PageHeaderButtonBack />
          </PageHeaderButton>
        }
      />

      {list.length === 0 && <Placeholder header='Пока ничего'>Ещё нет ни одной категории</Placeholder>}

      <Container>
        <Button size='l' stretched onClick={createCategory}>
          Создать новую категорию
        </Button>
      </Container>
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileCategoriesRoute), ROUTE_NAMES.profileCategories)
