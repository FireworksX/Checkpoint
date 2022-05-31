import { FC } from 'react'
import * as Styled from './styles'

interface CompilationCellProps {
  title: string
  image?: string
  description?: string
  className?: string
}

const CompilationCell: FC<CompilationCellProps> = ({ className, image, title, description }) => {
  return (
    <Styled.Root className={className}>
      {image && <Styled.Image src={image} />}
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default CompilationCell
