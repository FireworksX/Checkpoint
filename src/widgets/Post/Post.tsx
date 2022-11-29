import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import DisplayText from '../DisplayText/DisplayText'

interface PostProps {
  className?: string
  isConnected?: boolean
  target: ReactNode
}

const Post: FC<PostProps> = ({ className, target }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Connected>
        <Styled.ConnectedAvatar size={20} />
        <DisplayText>
          Connected from @dodi
        </DisplayText>
      </Styled.Connected>
      <Styled.Body>
        <Styled.Header verify firstName='Arthur' lastName='Abeltinsh' description='2h ago' />

        <Styled.Text>
          Was great meeting up with @annaferguson and Dave Bishop at the breakfast talk! 🍕#breakfast
        </Styled.Text>
        <Styled.Target>{target}</Styled.Target>
        <Styled.Actions>
          <Styled.Action icon='lightning'>15</Styled.Action>
          <Styled.Action icon='message-circle'>35</Styled.Action>
          <Styled.Action icon='heart'>61</Styled.Action>
        </Styled.Actions>
      </Styled.Body>
    </Styled.Root>
  )
}

export default Post
