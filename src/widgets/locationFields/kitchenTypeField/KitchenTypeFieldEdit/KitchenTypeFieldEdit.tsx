import { FC, useCallback, useEffect, useState } from 'react'
import * as Styled from './styles'
import { AppendButton } from './styles'
import KitchenTypeFieldCell from '../KitchenTypeFieldView/components/KitchenTypeFieldCell/KitchenTypeFieldCell'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { LocationKitchenTypesModalContext } from 'src/modals/LocationKitchenTypesModal/LocationKitchenTypesModal'

interface KitchenTypeFieldEditProps {
  className?: string
}

const KitchenTypeFieldEdit: FC<KitchenTypeFieldEditProps> = ({ className }) => {
  const [list, setList] = useState<string[]>([])
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

  return (
    <Styled.Root className={className}>
      <Styled.View>
        {list.map(el => (
          <KitchenTypeFieldCell key={el} onRemove={() => onRemove(el)}>
            {el}
          </KitchenTypeFieldCell>
        ))}
        <Styled.AppendButton mode='tertiary' onClick={onOpen}>
          + Добавить
        </Styled.AppendButton>
      </Styled.View>
    </Styled.Root>
  )
}

export default KitchenTypeFieldEdit
