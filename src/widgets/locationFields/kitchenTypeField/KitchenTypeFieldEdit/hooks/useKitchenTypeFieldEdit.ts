import { useCallback, useEffect, useState } from 'react'
import { useModal } from 'src/hooks/useModal'
import { LocationKitchenTypesModalContext } from 'src/modals/LocationKitchenTypesModal/LocationKitchenTypesModal'
import { MODAL_NAMES } from 'src/router/constants'

export const useKitchenTypeFieldEdit = (initialKitchen?: string[]) => {
  const [list, setList] = useState<string[]>(initialKitchen || [])
  const { open, updateContext } = useModal<LocationKitchenTypesModalContext>(MODAL_NAMES.locationKitchenTypes)

  useEffect(() => {
    updateContext({
      selected: list
    })
  }, [list, updateContext])

  const onOpen = useCallback(
    () =>
      open({
        selected: list,
        onSelect(kitchen: string) {
          setList(val => [...val, kitchen])
        },
        onAddOther(kitchen: string) {
          setList(val => [...val, kitchen])
        }
      }),
    [open, setList, list]
  )

  const onRemove = (kitchen: string) => {
    const findIndex = list.indexOf(kitchen)
    const newList = [...list]
    newList.splice(findIndex, 1)

    setList(newList)
  }

  return {
    list,
    onOpen,
    onRemove
  }
}
