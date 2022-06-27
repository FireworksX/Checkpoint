import { ChangeEventHandler, FC } from 'react'
import * as Styled from './styles'

interface TitleFieldEditProps {
  value: string
  className?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const TitleFieldEdit: FC<TitleFieldEditProps> = ({ className, value, onChange }) => {
  return (
    <Styled.Root className={className}>
      <Styled.InputField value={value} placeholder='Название' onChange={onChange} />
    </Styled.Root>
  )
}

export default TitleFieldEdit
