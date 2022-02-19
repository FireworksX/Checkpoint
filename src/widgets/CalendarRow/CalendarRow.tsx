import React from 'react'
import * as Styled from './styles'

interface CalendarRowProps {
  className?: string
}

const CalendarRow: React.FC<CalendarRowProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.ArrowButton>
        <Styled.ArrowIcon isLeftArrow />
      </Styled.ArrowButton>
      <Styled.Line />
      <Styled.Title>Today</Styled.Title>
      <Styled.Line />
      <Styled.ArrowButton>
        <Styled.ArrowIcon />
      </Styled.ArrowButton>
    </Styled.Root>
  )
}

export default CalendarRow
