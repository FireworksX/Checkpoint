import { FC } from 'react'
import * as Styled from './styles'

interface TitleFieldViewProps {
  value: string
  className?: string
}

const TitleFieldView: FC<TitleFieldViewProps> = ({ className, value }) => {
  return <Styled.Root className={className}>{value}</Styled.Root>
}

export default TitleFieldView
