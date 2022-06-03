import { FC } from 'react'
import * as Styled from './styles'
import { useTheme } from 'styled-components'
import ProgressBar from 'src/components/ProgressBar/ProgressBar'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'

interface CityInfoRatesProps {
  className?: string
}

const CityInfoRates: FC<CityInfoRatesProps> = ({ className }) => {
  const { colors } = useTheme()
  const { rates } = useCityInfo()

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

  return (
    <Styled.Root className={className}>
      {rates.map(rate => (
        <Styled.FieldWrapper key={rate.slug}>
          <ProgressBar label={rate.name} value={rate.value} colorScheme={colorScheme} />
          <Styled.FieldDescription>{rate.description}</Styled.FieldDescription>
        </Styled.FieldWrapper>
      ))}
    </Styled.Root>
  )
}

export default CityInfoRates
