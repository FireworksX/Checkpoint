import { FC } from 'react'
import * as Styled from './styles'
import Chip from 'src/widgets/ChipsInput/components/Chip/Chip'
import ChipsInput, { ChipsInputProps } from 'src/widgets/ChipsInput/ChipsInput'

interface TagsFieldEditProps extends Pick<ChipsInputProps, 'tags' | 'input' | 'onChange' | 'onKeyDown'> {
  className?: string
}

const TagsFieldEdit: FC<TagsFieldEditProps> = ({ className, ...rest }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Теги</Styled.Title>
      <ChipsInput {...rest} renderChip={({ label }) => <Chip>#{label}</Chip>} />
    </Styled.Root>
  )
}

export default TagsFieldEdit
