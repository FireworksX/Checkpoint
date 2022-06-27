import { ChangeEventHandler, FC } from 'react'
import * as Styled from './styles'

interface DescriptionFieldEditProps {
  className?: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const DescriptionFieldEdit: FC<DescriptionFieldEditProps> = ({ className, value, onChange }) => {
  return (
    <Styled.Root className={className}>
      <Styled.InputField value={value} placeholder='Описание места' onChange={onChange} />
    </Styled.Root>
  )
}

export default DescriptionFieldEdit
