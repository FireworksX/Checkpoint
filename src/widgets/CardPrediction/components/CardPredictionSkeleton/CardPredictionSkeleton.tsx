import React, { FC } from 'react'
import * as Styled from './styles'

const CardPredictionSkeleton: FC = () => {
  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Logos>
          <Styled.Logo />
          <Styled.Logo />
        </Styled.Logos>
        <Styled.Date />
      </Styled.Header>
      <Styled.League />
      <div>
        <Styled.Team />
        <Styled.Team />
      </div>
      <Styled.Prediction />
    </Styled.Root>
  )
}

export default CardPredictionSkeleton
