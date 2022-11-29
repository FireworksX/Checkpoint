import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import LocationCard from 'src/components/LocationCard/LocationCard'
import LocationCardSkeleton from 'src/components/LocationCardSkeleton/LocationCardSkeleton'
import BaseImage from 'src/components/BaseImage/BaseImage'
import Page from 'src/widgets/Page/Page'
import Post from '../../widgets/Post/Post'

export const Root = styled(Page)``

export const Header = styled(PageHeader)``

export const HeaderActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 15px;
`

export const SubscribeContainer = styled(Container)`
  text-align: center;
  margin-bottom: 15px;
`

export const PostWrapper = styled(Post)`
  margin-bottom: 15px;
`
