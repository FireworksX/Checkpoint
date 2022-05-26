import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useCityList } from './hooks/useCityList'
import Container from "../../components/Container/Container";
import CityInfoCompilations from "./widgets/CityInfoCompilations/CityInfoCompilations";

interface CityListRouteProps {
  className?: string
}

const CityInfoRoute: FC<CityListRouteProps> = ({ className }) => {
  const { list } = useCityList()

  return (
    <Styled.Root className={className}>
      <Styled.Header>Saint-Peterburg</Styled.Header>
      <Container>
        <CityInfoCompilations/>
      </Container>
    </Styled.Root>
  )
}

export default route(withValidateUser(CityInfoRoute), ROUTE_NAMES.cityInfo)
