import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import {MODAL_NAMES, ROUTE_NAMES} from '../../router/constants'
import Container from '../../components/Container/Container'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import Button from '../../components/Button/Button'
import { Actions } from './styles'
import Separator from '../../components/Separator/Separator'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import CommentCard from '../../components/CommentCard/CommentCard'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import {useModal} from "../../hooks/useModal";
import {LocationFieldsModalContext} from "../../modals/LocationFieldsModal/LocationFieldsModal";

interface PostDetailRouteProps {
  className?: string
}

const PostDetailRoute: FC<PostDetailRouteProps> = ({ className }) => {
  const { open } = useModal<LocationFieldsModalContext>(MODAL_NAMES.postCreate)


  return (
    <Styled.Root className={className} title='Post'>
      <Container>
        <Styled.ConnectedSection>Connected from @dodi</Styled.ConnectedSection>
        <Styled.Header firstName='Arthur' lastName='Abeltinsh' username='fireworks' />

        <Styled.Text>
          Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast
        </Styled.Text>
        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Target>
          <LocationCard />
        </Styled.Target>

        <Styled.Metrics>
          <Styled.Metric>
            <span>38</span> Connections
          </Styled.Metric>
          <Styled.Metric>
            <span>82</span> Likes
          </Styled.Metric>
        </Styled.Metrics>

        <Button size='l' icon='lightning' stretched onClick={open}>
          Connect
        </Button>

        <Styled.Actions>
          <Styled.Action icon='map-pin-alt' size='m' mode='secondary'>
            Show on map
          </Styled.Action>
          <Styled.Action icon='heart' size='m' mode='secondary'>
            Like
          </Styled.Action>
          <Styled.Action icon='share' size='m' mode='secondary'>
            Share
          </Styled.Action>
        </Styled.Actions>

        <Separator icon='message-circle' />

        <GroupWrapper title='Comments' counter={<Counter mode='accent'>4</Counter>}>
          <Styled.Comment>
            DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼
          </Styled.Comment>
          <Styled.Comment>
            DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼
          </Styled.Comment>
          <Styled.Comment>
            DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼
          </Styled.Comment>
          <Styled.Comment>
            DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼
          </Styled.Comment>
          <Styled.Comment>
            DUA x @puma styled soooo nice by @gabriellak_j for @britishvogue ~ proud moment for us @billywalsh 🫀🤞🏼
          </Styled.Comment>
        </GroupWrapper>
      </Container>
    </Styled.Root>
  )
}

export default route(PostDetailRoute, ROUTE_NAMES.postDetail)
