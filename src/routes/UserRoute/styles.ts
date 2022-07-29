import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import CompilationCell from 'src/components/CompilationCell/CompilationCell'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import LocationCard from 'src/components/LocationCard/LocationCard'
import LocationCardSkeleton from 'src/components/LocationCardSkeleton/LocationCardSkeleton'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Button from '../../components/Button/Button'
import Page from "../../widgets/Page/Page";

export const Root = styled(Page)``

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

export const SubscribeContainer = styled(Container)`
  text-align: center;
  margin-bottom: 15px;
`

export const LoaderWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
`
