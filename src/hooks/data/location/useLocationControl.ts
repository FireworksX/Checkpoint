import { useToggle } from 'react-use'
import { useLocationDescriptionField } from './fields/useLocationDescriptionField'
import { useLocationTitleField } from './fields/useLocationTitleField'
import { useLocationKitchenTypeField } from './fields/useLocationKitchenTypeField'
import { useLocationWifispeedField } from './fields/useLocationWifispeedField'
import { useLocationAverageBillField } from './fields/useLocationAverageBillField'
import { useLocationTagsField } from './fields/useLocationTagsField'
import { useLocationPollsField } from './fields/useLocationPollsField'

export const useLocationControl = (initialIsEdit = false) => {
  const [isEdit, toggleIsEdit] = useToggle(initialIsEdit)
  const titleField = useLocationTitleField({ isEdit })
  const descriptionField = useLocationDescriptionField({
    isEdit
  })
  const kitchenField = useLocationKitchenTypeField({
    isEdit
  })
  const wifispeedField = useLocationWifispeedField({
    isEdit
  })
  const averageBillField = useLocationAverageBillField({
    isEdit
  })
  const tagsField = useLocationTagsField({
    isEdit
  })
  const poolsField = useLocationPollsField({
    isEdit
  })

  return {
    isEdit,
    toggleIsEdit,
    titleField,
    descriptionField,
    kitchenField,
    wifispeedField,
    averageBillField,
    tagsField,
    poolsField
  }
}
