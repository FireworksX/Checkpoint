import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from '../../../../components/Touchable/Touchable'

interface PostActionProps extends TouchableProps {
  icon: SvgNames
  className?: string
}

const PostAction: FC<PostActionProps> = ({ className, children, icon, ...restProps }) => {
  return (
    <Styled.Root className={className} {...restProps}>
      <Styled.Icon name={icon} />
      {children}
    </Styled.Root>
  )
}

export default PostAction
