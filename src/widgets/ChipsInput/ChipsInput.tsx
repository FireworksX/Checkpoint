import { ChangeEvent, FC, KeyboardEvent, ReactNode, useCallback, useState } from 'react'
import * as Styled from './styles'
import { useChipsInput } from './hooks/useChipsInput'

export type ChipsInputValue = string | number

export interface ChipOption {
  value: ChipsInputValue
  label?: string
  [otherProp: string]: any
}

export interface ChipsInputProps {
  renderChip: (chipData: ChipOption) => ReactNode
  value: ChipOption[]
  className?: string
}

const ChipsInput: FC<ChipsInputProps> = ({ className, value = [], renderChip }) => {
  const { input, tags, onChange, onKeyDown } = useChipsInput(value)

  return (
    <Styled.Root className={className}>
      {tags.map(tag => renderChip(tag))}
      <Styled.Input
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='off'
        value={input}
        type='text'
        placeholder='Писать сюда'
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </Styled.Root>
  )
}

export default ChipsInput
