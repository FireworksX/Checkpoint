import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from '../../../../components/Touchable/Touchable'

interface PostActionProps extends TouchableProps {
  icon: SvgNames
  isActive?: boolean
  className?: string
}

const PostAction: FC<PostActionProps> = ({ className, isActive, children, icon, ...restProps }) => {
  return (
    <Styled.Root className={className} isActive={isActive} {...restProps}>
      <Styled.Icon name={icon} />
      {children}
    </Styled.Root>
  )
}

export default PostAction
