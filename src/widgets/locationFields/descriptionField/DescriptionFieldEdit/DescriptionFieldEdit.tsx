import { FC } from 'react'
import * as Styled from './styles'

interface DescriptionFieldEditProps {
  className?: string
}

const DescriptionFieldEdit: FC<DescriptionFieldEditProps> = ({ className }) => {
  return <Styled.Root className={className}>
    <Styled.InputField placeholder='Описание места'/>
  </Styled.Root>
}

export default DescriptionFieldEdit
