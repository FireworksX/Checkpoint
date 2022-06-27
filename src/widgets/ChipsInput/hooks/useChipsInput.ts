import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'
import { ChipOption, ChipsInputValue } from '../ChipsInput'

const SUBMIT_KEYS = ['Enter', ',']

const getNewChip = (label: ChipsInputValue): ChipOption => ({
  value: label,
  label: label.toString()
})

export const useChipsInput = (tags: ChipOption[]) => {
  const [input, setInput] = useState<string>('')

  const isExists = useCallback(
    (chipValue: ChipsInputValue) => tags.findIndex(({ value }) => value === chipValue) !== -1,
    [tags]
  )

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e?.target.value.trim())
    },
    [setInput]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const key = e?.key

      const includes = isExists(input)

      if (SUBMIT_KEYS.includes(key) && !includes) {
        setTags(prev => [...prev, getNewChip(input)])
        setInput('')
      }

      if (key === 'Backspace' && input.length === 0 && tags.length) {
        e.preventDefault()

        const tagsCopy = [...tags]
        tagsCopy.pop()

        setTags(tagsCopy)
      }
    },
    [input, tags, isExists]
  )

  return {
    input,
    tags,
    onChange,
    onKeyDown
  }
}
