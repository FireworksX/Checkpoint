import { FC } from 'react'
import * as Styled from './styles'

interface StoryProps {
  src: string
  className?: string
}

const Story: FC<StoryProps> = ({ className, src }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Image src={src} />
    </Styled.Root>
  )
}

export default Story
