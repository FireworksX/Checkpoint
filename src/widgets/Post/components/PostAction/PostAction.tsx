import { FC } from 'react'
import * as Styled from './styles'

interface PostActionProps {
  icon: SvgNames
  className?: string
}

const PostAction: FC<PostActionProps> = ({ className, children, icon }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Icon name={icon} />
      {children}
    </Styled.Root>
  )
}

export default PostAction
