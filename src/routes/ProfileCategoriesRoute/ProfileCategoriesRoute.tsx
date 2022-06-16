import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useRouter } from 'src/hooks/useRouter'
import { useProfileCategoriesRoute } from './hooks/useProfileCategoriesRoute'
import Icon from 'src/components/Icon/Icon'
import Button from 'src/components/Button/Button'
import Container from "src/components/Container/Container";

interface ProfileCategoriesRouteProps {
  className?: string
}

const ProfileCategoriesRoute: FC<ProfileCategoriesRouteProps> = ({ className }) => {
  const { back } = useRouter()
  const { list, editCategory, createCategory } = useProfileCategoriesRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        left={
          <PageHeaderButton onClick={back}>
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
                <Styled.ControlButton color='negative'>
                  <Icon name='close' width={16} height={16} />
                </Styled.ControlButton>
              </Styled.CategoryControls>
            }
          />
        ))}
      </Styled.Wrapper>
      <Container>
        <Button size='l' stretched onClick={createCategory}>
          Создать новую категорию
        </Button>
      </Container>
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileCategoriesRoute), ROUTE_NAMES.profileCategories)
