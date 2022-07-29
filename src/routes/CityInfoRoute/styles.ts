import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import CityInfoGallery from './widgets/CityInfoGallery/CityInfoGallery'
import CityInfoCompilations from "./widgets/CityInfoCompilations/CityInfoCompilations";
import CityInfoStories from "./widgets/CityInfoStories/CityInfoStories";
import CityInfoFacts from "./widgets/CityInfoFacts/CityInfoFacts";
import CityInfoRates from "./widgets/CityInfoRates/CityInfoRates";
import CityInfoAmbassadors from "./widgets/CityInfoAmbassadors/CityInfoAmbassadors";
import Page from "../../widgets/Page/Page";

export const Root = styled(Page)``

export const Header = styled(PageHeader)`
  ${({ theme }) => theme.typography.text_20_24};
  font-weight: bold;
  margin-bottom: 10px;
`

export const Gallery = styled(CityInfoGallery)`
  margin-bottom: 20px;
`

export const Compilations = styled(CityInfoCompilations)`
  margin-bottom: 40px;
`

export const Stories = styled(CityInfoStories)`
  margin-bottom: 40px;
`

export const Facts = styled(CityInfoFacts)`
  margin-bottom: 15px;
`

export const Rates = styled(CityInfoRates)`
  margin-bottom: 40px;
`

export const Ambassadors = styled(CityInfoAmbassadors)`
  margin-bottom: 40px;
`
