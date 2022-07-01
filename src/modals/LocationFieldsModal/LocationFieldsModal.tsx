import { FC } from 'react'
import * as Styled from './styles'
import { MODAL_NAMES } from 'src/router/constants'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import SimpleCell from 'src/components/SimpleCell/SimpleCell'
import { fieldsScheme, FieldsSchemeName } from 'src/hooks/data/location/useLocationField'
import { useModal } from 'src/hooks/useModal'

interface LocationFieldsModalProps {
  className?: string
}

export interface LocationFieldsModalContext {
  selected: FieldsSchemeName[]
  onSelect(fieldName: FieldsSchemeName): void
}

const LocationFieldsModal: FC<LocationFieldsModalProps> = ({ className }) => {
  const { context } = useModal<LocationFieldsModalContext>(MODAL_NAMES.locationFields)

  const fieldsList = Object.keys(fieldsScheme)
    .filter(key => !context?.selected?.includes(key as FieldsSchemeName))
    .map(key => fieldsScheme[key as FieldsSchemeName])

  return (
    <BottomSheet name={MODAL_NAMES.locationFields} withHeader autoClose>
      <Styled.Root className={className}>
        {fieldsList.map(field => (
          <SimpleCell key={field.type} onClick={() => context?.onSelect(field.type)}>
            {field.label}
          </SimpleCell>
        ))}
      </Styled.Root>
    </BottomSheet>
  )
}

export default LocationFieldsModal
