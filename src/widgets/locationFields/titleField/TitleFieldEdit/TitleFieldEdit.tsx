import { FC } from 'react'
import * as Styled from './styles'

interface TitleFieldEditProps {
  className?: string
}

const TitleFieldEdit: FC<TitleFieldEditProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.InputField placeholder='Название' />
    </Styled.Root>
  )
}

export default TitleFieldEdit
