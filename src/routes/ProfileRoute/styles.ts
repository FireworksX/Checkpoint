import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import LocationCard from 'src/components/LocationCard/LocationCard'
import LocationCardSkeleton from 'src/components/LocationCardSkeleton/LocationCardSkeleton'
import Icon from 'src/components/Icon/Icon'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Link from '../../widgets/Link/Link'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`

export const HeaderButton = styled(Touchable)`
  color: ${({ theme }) => theme.colors.primary};
`

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const CompilationWrapper = styled(HorizontalScroll)`
  margin: 15px 0;
`

export const Compilation = styled(CompilationCell)`
  white-space: nowrap;
  margin: 0 7px;

  &:first-child {
    margin-left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  }

  &:last-child {
    margin-right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  }
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
