import { useLocationField } from '../useLocationField'
import { useChipsInput } from 'src/widgets/ChipsInput/hooks/useChipsInput'
import { ChipOption } from 'src/widgets/ChipsInput/ChipsInput'

export interface LocationTagsFieldProps {
  isEdit: boolean
  initialTags?: ChipOption[]
}

export const useLocationTagsField = ({ isEdit, initialTags }: LocationTagsFieldProps) => {
  const { tags, input, onChange, onKeyDown } = useChipsInput(initialTags)

  const Component = useLocationField({
    fieldName: 'tags',
    isEdit,
    viewProps: {
      tags
    },
    editProps: {
      tags,
      input,
      onChange,
      onKeyDown
    }
  })

  return {
    fieldName: 'tags',
    Component,
    tags,
    isEmpty: tags.length === 0
  }
}
