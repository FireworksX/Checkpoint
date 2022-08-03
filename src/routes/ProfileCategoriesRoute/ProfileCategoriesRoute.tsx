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
      <Styled.Wrapper>
        {list.map(category => (
          <Styled.CategoryCard
            key={category._id}
            title={category.name}
            image={category.icon}
            description={category.description}
            after={
              <Styled.CategoryControls>
                <Styled.ControlButton color='neutral' onClick={() => editCategory(category)}>
                  <Icon name='pencil' width={16} height={16} />
                </Styled.ControlButton>
                <Styled.ControlButton color='negative' onClick={() => removeCategory(category)}>
                  <Icon name='close' width={16} height={16} />
                </Styled.ControlButton>
              </Styled.CategoryControls>
            }
          />
        ))}
      </Styled.Wrapper>

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
