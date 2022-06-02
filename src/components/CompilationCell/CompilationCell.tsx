import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface CompilationCellProps extends TouchableProps {
  title: string
  image?: string
  description?: string
  className?: string
  isActive?: boolean
}

const CompilationCell: FC<CompilationCellProps> = ({ className, image, title, isActive, description, ...rest }) => {
  return (
    <Styled.Root className={className} isActive={isActive} {...rest}>
      {image && <Styled.Image src={image} />}
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default CompilationCell
