import { FC, useCallback, useState } from 'react'
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

  const onOpen = useCallback(
    () =>
      open({
        selected: list,
        onSelect(type: string) {
          setList(val => {
            const newValue = [...val, type]
            updateContext({
              selected: newValue
            })

            return newValue
          })
        },
        onAddOther(type: string) {
          setList(val => {
            const newValue = [...val, type]
            updateContext({
              selected: newValue
            })

            return newValue
          })
        }
      }),
    [open, setList, list, updateContext]
  )

  return (
    <Styled.Root className={className}>
      <Styled.View>
        {list.map(el => (
          <KitchenTypeFieldCell key={el}>{el}</KitchenTypeFieldCell>
        ))}
        <Styled.AppendButton mode='tertiary' onClick={onOpen}>
          + Добавить
        </Styled.AppendButton>
      </Styled.View>
    </Styled.Root>
  )
}

export default KitchenTypeFieldEdit
