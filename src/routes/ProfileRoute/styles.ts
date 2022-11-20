import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import LocationCard from 'src/components/LocationCard/LocationCard'
import LocationCardSkeleton from 'src/components/LocationCardSkeleton/LocationCardSkeleton'
import BaseImage from 'src/components/BaseImage/BaseImage'

export const Root = styled.div``

export const Header = styled(PageHeader)`
`

export const CompilationWrapper = styled(HorizontalScroll)`
  margin: 15px 0;
`

export const CompilationInfo = styled(Touchable)``

export const LocationsWrapper = styled(Container)`
  margin-top: 15px;
`

export const LocationCell = styled(LocationCard)`
  margin-bottom: 15px;
`

export const LocationCellSkeleton = styled(LocationCardSkeleton)`
  margin-bottom: 15px;
`

export const PlaceholderImage = styled(BaseImage)`
  width: 60px;
`

export const LoaderWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
`
