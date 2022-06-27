import { useLocationField } from '../useLocationField'
import { useKitchenTypeFieldEdit } from 'src/widgets/locationFields/kitchenTypeField/KitchenTypeFieldEdit/hooks/useKitchenTypeFieldEdit'
import KitchenTypeFieldCell from 'src/widgets/locationFields/kitchenTypeField/KitchenTypeFieldView/components/KitchenTypeFieldCell/KitchenTypeFieldCell'

interface Props {
  isEdit: boolean
  initialKitchen?: string[]
}

export const useLocationKitchenTypeField = ({ isEdit, initialKitchen }: Props) => {
  const { list, onOpen, onRemove } = useKitchenTypeFieldEdit(initialKitchen)

  const Component = useLocationField({
    fieldName: 'kitchen',
    isEdit,
    viewProps: {
      children: list.map(kitchen => <KitchenTypeFieldCell key={kitchen}>{kitchen}</KitchenTypeFieldCell>)
    },
    editProps: {
      list,
      onOpen,
      onRemove
    }
  })

  return {
    Component,
    list
  }
}
