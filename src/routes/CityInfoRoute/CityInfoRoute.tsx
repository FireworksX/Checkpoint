import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useCityList } from './hooks/useCityList'
import CityInfoStories from './widgets/CityInfoStories/CityInfoStories'

interface CityListRouteProps {
  className?: string
}

const CityInfoRoute: FC<CityListRouteProps> = ({ className }) => {
  const { list } = useCityList()

  return (
    <Styled.Root className={className}>
      <Styled.Header>Санкт-Петербург</Styled.Header>
      <Styled.Gallery />
      <Styled.Compilations />
      <CityInfoStories />
    </Styled.Root>
  )
}

export default route(withValidateUser(CityInfoRoute), ROUTE_NAMES.cityInfo)
