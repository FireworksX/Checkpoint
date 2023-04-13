import { FC } from 'react'
import ActionSheet from '../../widgets/ActionSheet/ActionSheet'
import ActionSheetItem from '../../widgets/ActionSheet/components/ActionSheetItem/ActionSheetItem'
import { MODAL_NAMES } from '../../router/constants'
import { useModal } from '../../hooks/useModal'

interface PostActionsProps {}

export interface PostActionsContext {
  onReport: Callback
  onEdit: Callback
  onDelete: Callback
}

const PostActions: FC<PostActionsProps> = () => {
  const { modalContext } = useModal()
  const context = modalContext[MODAL_NAMES.postActions]

  return (
    <ActionSheet name={MODAL_NAMES.postActions}>
      {context?.onReport && <ActionSheetItem onClick={context.onReport}>Report</ActionSheetItem>}
      {context?.onEdit && <ActionSheetItem onClick={context.onEdit}>Edit</ActionSheetItem>}
      {context?.onDelete && (
        <ActionSheetItem mode='destructive' onClick={context.onDelete}>
          Delete
        </ActionSheetItem>
      )}
    </ActionSheet>
  )
}

export default PostActions
