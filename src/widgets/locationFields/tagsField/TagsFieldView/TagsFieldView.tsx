import { FC } from 'react'
import * as Styled from './styles'
import Chip from 'src/widgets/ChipsInput/components/Chip/Chip'
import { ChipOption } from 'src/widgets/ChipsInput/ChipsInput'

interface TagsFieldViewProps {
  list: ChipOption[]
  className?: string
}

const TagsFieldView: FC<TagsFieldViewProps> = ({ className, list }) => {
  return (
    <Styled.Root className={className}>
      {list.map(tag => (
        <Chip key={tag.label}>#{tag.label}</Chip>
      ))}
    </Styled.Root>
  )
}

export default TagsFieldView
