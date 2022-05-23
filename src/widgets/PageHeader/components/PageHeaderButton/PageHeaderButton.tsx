import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface PageHeaderButtonProps extends TouchableProps {
  className?: string
}

const PageHeaderButton: FC<PageHeaderButtonProps> = ({ className, children, ...rest }) => {
  return (
    <Styled.Root className={className} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default PageHeaderButton
