import { ChangeEvent, FC, KeyboardEvent, ReactNode } from 'react'
import * as Styled from './styles'

export type ChipsInputValue = string | number

export interface ChipOption {
  value: ChipsInputValue
  label?: string
  [otherProp: string]: any
}

export interface ChipsInputProps {
  renderChip: (chipData: ChipOption) => ReactNode
  input: string
  tags: ChipOption[]
  className?: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void
}

const ChipsInput: FC<ChipsInputProps> = ({ className, tags = [], renderChip, input, onChange, onKeyDown }) => {
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
