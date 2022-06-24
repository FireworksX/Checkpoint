import { FC } from 'react'
import * as Styled from './styles'

interface RadioButtonIconProps {
  iconName: SvgNames
  className?: string
}

const RadioButtonIcon: FC<RadioButtonIconProps> = ({ className, iconName }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Wrapper>
        <Styled.Icon name={iconName} />
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default RadioButtonIcon
