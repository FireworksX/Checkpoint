import { FC } from 'react'
import * as Styled from './styles'

interface TitleFieldViewProps {
  className?: string
}

const TitleFieldView: FC<TitleFieldViewProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default TitleFieldView
