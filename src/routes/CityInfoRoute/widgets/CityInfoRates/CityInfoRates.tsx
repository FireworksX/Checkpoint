import { FC, useState } from 'react'
import * as Styled from './styles'
import { useTheme } from 'styled-components'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'

interface CityInfoRatesProps {
  className?: string
}

const CityInfoRates: FC<CityInfoRatesProps> = ({ className }) => {
  const { colors } = useTheme()

  const colorScheme = [
    {
      value: 0,
      color: colors.accentRed
    },
    {
      value: 40,
      color: colors.accentAmber
    },
    {
      value: 60,
      color: colors.statusSuccessText
    }
  ]

  const list = [
    {
      label: 'Цены',
      value: 50,
      description: 'выше стреднего'
    },
    {
      label: 'Погода',
      value: 85,
      description: 'обычно хорошая погода'
    },
    {
      label: 'Уровень английского',
      value: 70,
      description: 'достаточно хороший'
    }
  ]

  return (
    <Styled.Root className={className}>
      {list.map(el => (
        <Styled.FieldWrapper>
          <ProgressBar label={el.label} value={el.value} colorScheme={colorScheme} />
          <Styled.FieldDescription>{el.description}</Styled.FieldDescription>
        </Styled.FieldWrapper>
      ))}
    </Styled.Root>
  )
}

export default CityInfoRates
