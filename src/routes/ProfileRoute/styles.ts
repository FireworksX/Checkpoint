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
import Link from "../../widgets/Link/Link";

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

export const Head = styled(Container)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Avatar = styled(CommonLogo).attrs({ size: 90, withRadius: true })`
  margin-right: 30px;
`

export const NameWrapper = styled.div`
  width: 100%;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.text_20_24}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
`

export const Metrics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  border-top: 2px solid ${({ theme }) => theme.colors.border};
`

export const MetricCell = styled(Link)`
  text-align: center;
  padding: 10px 0;
`

export const MetricLabel = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.secondary};
`

export const MetricValue = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  font-weight: bold;
  margin-bottom: 5px;
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
