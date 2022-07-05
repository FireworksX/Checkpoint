import { FC } from 'react'
import { MODAL_NAMES } from 'src/router/constants'
import ActionSheetItem, {
  ActionSheetItemProps
} from 'src/widgets/ActionSheet/components/ActionSheetItem/ActionSheetItem'
import ActionSheet from 'src/widgets/ActionSheet/ActionSheet'
import { useModal } from 'src/hooks/useModal'

interface LocationViewOptionsModalProps {
  className?: string
}

export interface LocationViewOptionsModalContext {
  actions: { label: string; mode?: ActionSheetItemProps['mode']; onClick: ActionSheetItemProps['onClick'] }[]
}

const LocationViewOptionsModal: FC<LocationViewOptionsModalProps> = ({ className }) => {
  const { context } = useModal<LocationViewOptionsModalContext>(MODAL_NAMES.locationViewOptions)

  const actions = context?.actions || []

  return (
    <ActionSheet className={className} name={MODAL_NAMES.locationViewOptions}>
      {actions.map((action, index) => (
        <ActionSheetItem key={`${action.label}_${index}`} {...action}>
          {action.label}
        </ActionSheetItem>
      ))}
    </ActionSheet>
  )
}

export default LocationViewOptionsModal
