import { FC } from 'react'
import * as Styled from './styles'
import Chip from '../../../ChipsInput/components/Chip/Chip'
import ChipsInput from '../../../ChipsInput/ChipsInput'

interface TagsFieldEditProps {
  className?: string
}

const TagsFieldEdit: FC<TagsFieldEditProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <ChipsInput renderChip={({ label }) => <Chip>#{label}</Chip>} />
    </Styled.Root>
  )
}

export default TagsFieldEdit
