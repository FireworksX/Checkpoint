import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useCityInfo } from './hooks/useCityInfo'
import Link from '../../widgets/Link/Link'

interface CityListRouteProps {
  className?: string
}

const CityInfoRoute: FC<CityListRouteProps> = ({ className }) => {
  const { city } = useCityInfo()

  return (
    <Styled.Root className={className}>
      <Styled.Header>{city?.name}</Styled.Header>
      <Styled.Gallery />
      <Styled.Compilations />
      <Styled.Stories />
      <Styled.Facts />
      <Styled.Rates />
      <Styled.Ambassadors />
      <Link type='user' userSlug='fireworks2'>
        На страницу пользователя
      </Link>
    </Styled.Root>
  )
}

export default route(withValidateUser(CityInfoRoute), ROUTE_NAMES.cityInfo)
