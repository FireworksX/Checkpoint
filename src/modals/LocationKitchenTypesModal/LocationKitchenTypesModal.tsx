import {FC, useCallback, useState} from 'react'
import * as Styled from './styles'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import SimpleCell from 'src/components/SimpleCell/SimpleCell'
import { useModal } from 'src/hooks/useModal'
import Input from 'src/components/Input/Input'

interface LocationKitchenTypesModalProps {
  className?: string
}

export interface LocationKitchenTypesModalContext {
  selected: string[]
  onSelect(type: string): void
  onAddOther(type: string): void
}

const LIST = ['Авторская', 'Европейская', 'Стритфуд', 'Грузинская', 'Японская', 'Русская']

const LocationKitchenTypesModal: FC<LocationKitchenTypesModalProps> = ({ className }) => {
  const [customValue, setCustomValue] = useState('')
  const { context } = useModal<LocationKitchenTypesModalContext>(MODAL_NAMES.locationKitchenTypes)

  const resultList = LIST.filter(el => !context?.selected?.includes(el))

  const addOther = useCallback(() => {
    context?.onAddOther(customValue)
    setCustomValue('')
  }, [customValue, context, setCustomValue])

  return (
    <BottomSheet name={MODAL_NAMES.locationKitchenTypes} withHeader autoClose>
      <Styled.Root className={className}>
        {resultList.map(type => (
          <SimpleCell key={type} onClick={() => context?.onSelect && context.onSelect(type)}>
            {type}
          </SimpleCell>
        ))}
        <Styled.MoreRow>
          <Input value={customValue} placeholder='Своя' onChange={({ target: { value } }) => setCustomValue(value)} />
          <Styled.MoreButton mode='tertiary' onClick={addOther}>
            Добавить
          </Styled.MoreButton>
        </Styled.MoreRow>
      </Styled.Root>
    </BottomSheet>
  )
}

export default LocationKitchenTypesModal
