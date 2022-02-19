import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface PageHeaderButtonProps {
  className?: string
  onClick?: TouchableProps['onClick']
}

const PageHeaderButton: FC<PageHeaderButtonProps> = ({ className, children, onClick }) => {
  return <Styled.Root className={className} onClick={onClick}>{children}</Styled.Root>
}

export default PageHeaderButton
