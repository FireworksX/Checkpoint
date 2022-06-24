import { RadioButton } from '../RadioButtons'
import { useMemo, useState } from 'react'

type PropsButton = Omit<RadioButton, 'isActive'>

export const useRadioButtons = (buttons: PropsButton[] = [], initialActiveIndex = 0) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex)

  const parsedButtons = useMemo<RadioButton[]>(
    () => buttons.map((cell, index) => ({ ...cell, isActive: index === activeIndex })),
    [activeIndex, buttons]
  )

  return {
    list: parsedButtons,
    activeItem: parsedButtons.find(({ isActive }) => isActive),
    onClick: setActiveIndex
  }
}
