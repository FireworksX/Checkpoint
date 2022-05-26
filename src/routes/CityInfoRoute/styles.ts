import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import CityInfoGallery from './widgets/CityInfoGallery/CityInfoGallery'
import CityInfoCompilations from "./widgets/CityInfoCompilations/CityInfoCompilations";

export const Root = styled.div``

export const Header = styled(PageHeader)`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
`

export const Gallery = styled(CityInfoGallery)`
  margin-bottom: 20px;
`

export const Compilations = styled(CityInfoCompilations)`
  margin-bottom: 40px;
`
