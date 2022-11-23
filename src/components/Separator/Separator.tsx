import { FC } from 'react'
import * as Styled from './styles'
import { IconDelim } from './styles'

interface SeparatorProps {
  icon?: SvgNames
  className?: string
}

const Separator: FC<SeparatorProps> = ({ className, icon }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Line />
      {icon && <Styled.IconDelim name={icon} />}
      <Styled.Line />
    </Styled.Root>
  )
}

export default Separator
