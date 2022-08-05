import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface CompilationCellProps extends TouchableProps {
  title: string
  image?: string
  description?: string
  className?: string
  afterClassName?: string
  isActive?: boolean
  after?: ReactNode
}

const CompilationCell: FC<CompilationCellProps> = ({
  className,
  afterClassName,
  image,
  title,
  isActive,
  description,
  after,
  ...rest
}) => {
  return (
    <Styled.Root className={className} isActive={isActive} {...rest}>
      {image && <Styled.Image src={image} />}
      <Styled.TextWrapper hasImage={!!image}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.TextWrapper>

      {after && <Styled.After className={afterClassName}>{after}</Styled.After>}
    </Styled.Root>
  )
}

export default CompilationCell
