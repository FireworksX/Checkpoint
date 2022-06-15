import { FC } from 'react'
import { MODAL_NAMES } from 'src/router/constants'
import ActionSheetItem from 'src/widgets/ActionSheet/components/ActionSheetItem/ActionSheetItem'
import ActionSheet from 'src/widgets/ActionSheet/ActionSheet'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

interface ProfileSettingsModalProps {
  className?: string
}

const MODAL_NAME = MODAL_NAMES.profileSettings

const ProfileSettingsModal: FC<ProfileSettingsModalProps> = ({ className }) => {
  const { logout } = useCurrentUser()

  return (
    <ActionSheet className={className} name={MODAL_NAME}>
      {/*<ActionSheetItem>Настройки</ActionSheetItem>*/}
      {/*<ActionSheetItem>Изменить категории</ActionSheetItem>*/}
      <ActionSheetItem mode='destructive' onClick={logout}>
        Выход
      </ActionSheetItem>
    </ActionSheet>
  )
}

export default ProfileSettingsModal
