import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useCityList } from './hooks/useCityList'
import SimpleCell from 'src/components/SimpleCell/SimpleCell'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Link from 'src/widgets/Link/Link'
import {staticImagesMap} from "src/data/staticImagesMap";

interface CityListRouteProps {
  className?: string
}

const CityListRoute: FC<CityListRouteProps> = ({ className }) => {
  const { list } = useCityList()

  return (
    <Styled.Root className={className}>
      <Styled.ImageWrapper>
        <Styled.Image src={staticImagesMap.sunset} />
      </Styled.ImageWrapper>
      <Styled.Title>Choose city</Styled.Title>
      <Styled.Description>Select city which one you want to explore</Styled.Description>
      {list.map(city => (
        <Link key={city.slug} type='cityInfo' citySlug={city.slug}>
          <SimpleCell
            description='Кол-во локаций: 243'
            expandable
            before={<CommonLogo size={34} src={staticImagesMap.church} />}
          >
            {city.name}
          </SimpleCell>
        </Link>
      ))}
    </Styled.Root>
  )
}

export default route(withValidateUser(CityListRoute), ROUTE_NAMES.cityList)
