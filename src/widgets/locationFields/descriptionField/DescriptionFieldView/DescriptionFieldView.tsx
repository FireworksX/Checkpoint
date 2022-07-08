import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { useToggle } from 'react-use'

interface DescriptionFieldViewProps {
  className?: string
  limit?: number
  expandable?: boolean
  children: string
}

const LIMIT = 250

const DescriptionFieldView: FC<DescriptionFieldViewProps> = ({
  className,
  children,
  expandable = true,
  limit = LIMIT
}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  const parsedText = useMemo(() => {
    if (children.length > limit && !isOpen) {
      return {
        hasMore: true,
        text: children.slice(0, limit - 3) + '...'
      }
    }

    return {
      hasMore: false,
      text: children
    }
  }, [children, isOpen, limit])

  return (
    <Styled.Root className={className}>
      {parsedText.text}
      {children.length > limit && expandable && (
        <Styled.More onClick={toggleIsOpen}>{isOpen ? 'Свернуть' : 'Развернуть'}</Styled.More>
      )}
    </Styled.Root>
  )
}

export default DescriptionFieldView
