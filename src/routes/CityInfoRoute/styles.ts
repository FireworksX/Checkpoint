import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import CityInfoGallery from './widgets/CityInfoGallery/CityInfoGallery'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
`

export const Gallery = styled(CityInfoGallery)`
  margin-bottom: 20px;
`
