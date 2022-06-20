import { FC, useMemo } from 'react'
import * as Styled from './styles'
import { useToggle } from 'react-use'

interface DescriptionFieldViewProps {
  className?: string
  children: string
}

const LIMIT = 250

const DescriptionFieldView: FC<DescriptionFieldViewProps> = ({ className, children }) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  const parsedText = useMemo(() => {
    if (children.length > LIMIT && !isOpen) {
      return {
        hasMore: true,
        text: children.slice(0, LIMIT - 3) + '...'
      }
    }

    return {
      hasMore: false,
      text: children
    }
  }, [children, isOpen])

  return (
    <Styled.Root className={className}>
      {parsedText.text}
      {children.length > LIMIT && (
        <Styled.More onClick={toggleIsOpen}>{isOpen ? 'Свернуть' : 'Развернуть'}</Styled.More>
      )}
    </Styled.Root>
  )
}

export default DescriptionFieldView
