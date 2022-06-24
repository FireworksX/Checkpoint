import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Icon from '../Icon/Icon'

interface SimpleCellProps {
  className?: string
  before?: ReactNode
  after?: ReactNode
  expandable?: boolean
  description?: string | number
  onClick?: (...args: any) => any
}

const SimpleCell: FC<SimpleCellProps> = ({ className, before, after, description, expandable, children, onClick }) => {
  return (
    <Styled.Root className={className} onClick={onClick}>
      <Styled.Before>{before}</Styled.Before>
      <Styled.Main>
        {children}
        <Styled.Description>{description}</Styled.Description>
      </Styled.Main>
      <Styled.Before>{after}</Styled.Before>
      {expandable && (
        <Styled.Expandable>
          <Icon name='arrow-chevron' />
        </Styled.Expandable>
      )}
    </Styled.Root>
  )
}

export default SimpleCell
