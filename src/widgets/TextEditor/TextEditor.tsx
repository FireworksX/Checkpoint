import { FC, useMemo } from 'react'
import * as Styled from './styles'

interface TextEditorProps {
  value: string
  className?: string
  onChange(value: string): void
}

const TextEditor: FC<TextEditorProps> = ({ className, value, onChange }) => {

  const fontSize = useMemo(() => {
    const length = value.length

    if (length < 100) {
      return 'l'
    } else if (length < 200) {
      return 'm'
    }

    return 's'
  }, [value])

  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <Styled.HeaderCell before='#'>Hashtag</Styled.HeaderCell>
        <Styled.HeaderCell before='@'>Mention</Styled.HeaderCell>
      </Styled.Header>

      <Styled.Body
        maxRows={10}
        fontSize={fontSize}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Styled.Root>
  )
}

export default TextEditor
