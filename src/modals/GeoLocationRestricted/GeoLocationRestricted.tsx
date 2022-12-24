import { FC, useCallback, useState } from 'react'
import ModalCard from '../../widgets/ModalCard/ModalCard'
import { MODAL_NAMES } from '../../router/constants'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import { useModal } from '../../hooks/useModal'
import { useLocationPermission } from '../../hooks/data/useLocationPermission'
import { promiseWaiter } from '../../utils/promiseWaiter'

interface GeoLocationRestrictedProps {
  className?: string
}

export interface GeoLocationRestrictedContext {
  onCheckedPermission?: Callback<[boolean], void>
}

const GeoLocationRestricted: FC<GeoLocationRestrictedProps> = ({ className }) => {
  const { close, context } = useModal<GeoLocationRestrictedContext>(MODAL_NAMES.geoLocationRestricted)
  const { askPermission } = useLocationPermission()
  const [isChecking, setIsChecking] = useState(false)

  const check = useCallback(async () => {
    setIsChecking(true)
    const result = await askPermission()
    await promiseWaiter(500)
    setIsChecking(false)

    if (result) {
      await close()

      if (context?.onCheckedPermission) {
        context?.onCheckedPermission(result)
      }
    }
  }, [askPermission, close, context])

  return (
    <ModalCard
      className={className}
      name={MODAL_NAMES.geoLocationRestricted}
      header='No permission to receive your location'
      description='Open settings on your device and give permissions to detect your location.'
      icon={<Icon name='my-location' width={54} height={54} />}
      actionsHorizontal
      actions={
        <>
          <Button stretched mode='outline' size='xl' onClick={close}>
            Cancel
          </Button>
          <Button stretched size='xl' loading={isChecking} onClick={check}>
            Check
          </Button>
        </>
      }
    />
  )
}

export default GeoLocationRestricted
