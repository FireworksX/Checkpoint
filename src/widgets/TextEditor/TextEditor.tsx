import { FC, useMemo, useState } from 'react'
import * as Styled from './styles'

interface TextEditorProps {
  className?: string
}

const TextEditor: FC<TextEditorProps> = ({ className }) => {
  const [value, setValue] = useState('')

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
        onChange={({ target: { value } }) => setValue(value)}
      />
    </Styled.Root>
  )
}

export default TextEditor
