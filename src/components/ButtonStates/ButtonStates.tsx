import { FC, ReactNode, useMemo } from 'react'
import Button, { ButtonProps } from '../Button/Button'

interface ButtonState extends Partial<ButtonProps> {}

interface ButtonStatesProps extends ButtonProps {
  stateIndex?: 0 | 1
  states: [ButtonState, ButtonState]
}

const ButtonStates: FC<ButtonStatesProps> = ({ states, stateIndex = 0, ...baseButtonProps }) => {
  const resultProps = useMemo(
    () => ({ ...states[stateIndex], ...baseButtonProps }),
    [stateIndex, states, baseButtonProps]
  )

  return <Button {...resultProps} />
}

export default ButtonStates
